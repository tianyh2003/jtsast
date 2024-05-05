# jtsast

仓库地址：[tyh4567/jtsast (github.com)](https://github.com/tyh4567/jtsast/)

## 推荐使用环境

ubuntu 22.04  
node 18.20.2

## 快速开始

### 安装

```
git clone https://github.com/tyh4567/jtsast
cd jtsast
npm install  
npm link
```

### 验证

```
jtsast
```

出现以下则成功

```
# jtsast
# input file address : ./in/
# output file address : ./out/
```

## 功能

本框架具有以下功能：

- 漏洞探测
- 调用图构建
- 数据流图生成

使用以下命令，可以查看帮助

```
jtsast -h
```

结果如下：

```
Options:
  -V, --version     output the version number
  --in [inAddr]     input file address (default: "./in/")
  --out [outAddr]   output file address (default: "./out/")
  --dmp             detecting_malicious_patterns
  --callgraph-html  save call graph as HTML file
  --dataflow-html   save data-flow graph as HTML file
  -h, --help        output usage information
```

下面是使用示例：

使用示例运行结果见 `` jtsast/out/total``

测试样例准备：

```
cd /home/tyh/hwmain/jtsast/in/test4
unzip applications_photos.zip
```

开始测试：

```
jtsast --callgraph-html --in in/test4/applications_photos/
jtsast --dataflow-html --in in/test4/applications_photos/
```

jtsast/out目录中会生成文件

```
callgraph_html_res.html
dataflow_html_res.html
```

