(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{aEAl:function(t,n,e){"use strict";e.r(n);var r=e("xwgP"),a=e.n(r),s=e("bFoq"),i=e("3Vho"),o=a.a.memo((t=>{t.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u7b2c\u4e8c\u7ae0"},a.a.createElement(s["AnchorLink"],{to:"#\u7b2c\u4e8c\u7ae0","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u7b2c\u4e8c\u7ae0"),a.a.createElement(i["a"],{code:'package main\n\nimport (\n\t"bufio"\n\t"fmt"\n\t"io"\n\t"log"\n\t"net/url"\n\t"os"\n\t"regexp"\n\t"strconv"\n\t"strings"\n\t"time"\n)\n\n// Reader \u8bfb\u53d6\u6a21\u5757\ntype Reader interface {\n\tRead(rc chan []byte)\n}\n\n// Writer \u5199\u5165\u6a21\u5757\ntype Writer interface {\n\tWrite(wc chan *Message)\n}\n\n// LogProcess \u5b9a\u4e49\u4e00\u4e2a\u7c7b\ntype LogProcess struct {\n\trc    chan []byte\n\twc    chan *Message\n\tread  Reader // \u8bfb\u53d6\u6587\u4ef6\u8def\u5f84\n\twrite Writer // influx data source\n}\n\n// ReadFromFile \u8bfb\u53d6\u7ed3\u6784\u4f53\ntype ReadFromFile struct {\n\tpath string\n}\n\n// WriteToInfluxDB \u5199\u5165\u7ed3\u6784\u4f53\ntype WriteToInfluxDB struct {\n\tinfluxDBDsn string\n}\n\n// Message \u7ed3\u6784\u4f53\ntype Message struct {\n\tTimeLocal                    time.Time\n\tbytesSent                    int\n\tPath, Method, Scheme, Status string\n\tUpstreamTime, RequestTime    float64\n}\n\n// Read \u8bfb\u53d6\u6a21\u5757\nfunc (r *ReadFromFile) Read(rc chan []byte) {\n\t// \u6253\u5f00\u6587\u4ef6\n\tf, err := os.Open(r.path)\n\tif err != nil {\n\t\tpanic(fmt.Sprintf("open file error: %s", err.Error()))\n\t}\n\n\t// \u4ece\u6587\u4ef6\u672b\u5c3e\u5f00\u59cb\u9010\u884c\u8bfb\u53d6\u5185\u5bb9\n\n\t// \u628a\u5b57\u7b26\u6307\u9488\u79fb\u5230\u6587\u4ef6\u672b\u5c3e\n\tf.Seek(0, 2)\n\trd := bufio.NewReader(f)\n\n\tfor {\n\t\tline, err := rd.ReadBytes(\'\\n\')\n\t\tif err == io.EOF {\n\t\t\ttime.Sleep(500 * time.Millisecond)\n\t\t\tcontinue\n\t\t} else if err != nil {\n\t\t\tpanic(fmt.Sprintf("ReadBytes error: %s", err.Error()))\n\t\t}\n\t\trc <- line[:len(line)-1]\n\t}\n}\n\n// Writer \u5199\u5165\nfunc (w *WriteToInfluxDB) Write(wc chan *Message) {\n\n\tfor v := range wc {\n\t\tfmt.Println(v)\n\t}\n}\n\n// Process \u89e3\u6790\u6a21\u5757\nfunc (l *LogProcess) Process() {\n\n\t/**\n\t172.0.0.12 - - [04/Mar/2018:13:49:52 +0000] http "GET /foo?query=t HTTP/1.0" 200 2133 "-" "KeepAliveClient" "-" 1.005 1.854\n\t*/\n\n\t// \u6b63\u5219\u8868\u8fbe\u5f0f\n\tr := regexp.MustCompile(`([\\d\\.]+)\\s+([^ \\[]+)\\s+([^ \\[]+)\\s+\\[([^\\]]+)\\]\\s+([a-z]+)\\s+\\"([^"]+)\\"\\s+(\\d{3})\\s+(\\d+)\\s+\\"([^"]+)\\"\\s+\\"(.*?)\\"\\s+\\"([\\d\\.-]+)\\"\\s+([\\d\\.-]+)\\s+([\\d\\.-]+)`)\n\n\tloc, _ := time.LoadLocation("Asia/ShangHai")\n\tfor v := range l.rc {\n\t\tret := r.FindStringSubmatch(string(v))\n\n\t\tif len(ret) != 14 {\n\t\t\tlog.Println("FindStringSubmatch fail:", string(v))\n\t\t\tcontinue\n\t\t}\n\n\t\tmessage := &Message{}\n\t\tt, err := time.ParseInLocation("02/Jan/2006:15:04:05 +0000", ret[4], loc)\n\t\tif err != nil {\n\t\t\tlog.Println("ParseInLocation: fail", err.Error(), ret[4])\n\t\t}\n\t\tmessage.TimeLocal = t\n\n\t\tbyteSent, _ := strconv.Atoi(ret[8])\n\t\tmessage.bytesSent = byteSent\n\n\t\t// GET /foo?query=t HTTP/1.0\n\t\treqSli := strings.Split(ret[6], " ")\n\t\tif len(reqSli) != 3 {\n\t\t\tlog.Println("strings.Split fail ", ret[6])\n\t\t\tcontinue\n\t\t}\n\n\t\tmessage.Method = reqSli[0]\n\n\t\tu, err := url.Parse(reqSli[1])\n\t\tif err != nil {\n\t\t\tlog.Println("url parse fail:", err)\n\t\t\tcontinue\n\t\t}\n\t\tmessage.Path = u.Path\n\n\t\tmessage.Scheme = ret[5]\n\t\tmessage.Status = ret[7]\n\n\t\tupstreamTime, _ := strconv.ParseFloat(ret[12], 64)\n\t\trequestTime, _ := strconv.ParseFloat(ret[13], 64)\n\t\tmessage.UpstreamTime = upstreamTime\n\t\tmessage.RequestTime = requestTime\n\n\t\tl.wc <- message\n\t}\n}\n\nfunc main() {\n\tr := &ReadFromFile{\n\t\tpath: "temp/access.log",\n\t}\n\n\tw := &WriteToInfluxDB{\n\t\tinfluxDBDsn: "username&password..",\n\t}\n\n\tlp := &LogProcess{\n\t\trc:    make(chan []byte),\n\t\twc:    make(chan *Message),\n\t\tread:  r,\n\t\twrite: w,\n\t}\n\n\t// gorotine \u5e76\u53d1\u6267\u884c\uff0c\u63d0\u5347\u6548\u7387\n\tgo lp.read.Read(lp.rc)\n\tgo lp.Process()\n\tgo lp.write.Write(lp.wc)\n\n\ttime.Sleep(30 * time.Second)\n}',lang:"js"})))}));n["default"]=t=>{var n=a.a.useContext(s["context"]),e=n.demos;return a.a.useEffect((()=>{var n;null!==t&&void 0!==t&&null!==(n=t.location)&&void 0!==n&&n.hash&&s["AnchorLink"].scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))}),[]),a.a.createElement(o,{demos:e})}}}]);