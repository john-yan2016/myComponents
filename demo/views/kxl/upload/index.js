import React, { Component } from 'react';
import './index.css';
/*
思考：
*/

export default class Upload extends Component {

    constructor(props) {
        super(props);
    }
    btnClick() {
        let ipt = this.refs.upload;
        ipt.click();

    }
    uploadFile(type) {
        let obj = this.refs.upload;
        // console.log("执行函数", obj.value, type);
        let oFiles = obj.files; //读取的文件
        let that = this;
        if (that.props.filter) {
            const { rFilter, eInfo, maxSize } = that.props.filter
            debugger;
            for (let i = 0; i < oFiles.length; i++) {
                let oFile = oFiles[i];
                if (!rFilter.test(oFile.type)) {
                    that.props.onChange(eInfo.typeError || "上传文件类型错误");
                    return;
                }
                if (oFile.size > maxSize) {
                    that.props.onChange(eInfo.sizeError || "上传文件过大");
                    return;
                }
            }
        }
        this.props.onChange(oFiles);
        /*        const action = this.props.action;
                var formData = new FormData(); //建立请求和数据
                var oXHR = new XMLHttpRequest();
                var that = this;
                oXHR.addEventListener('load', function(resUpload) {
                    //成功
                    that.props.onChange(oFiles, "load success");
                }, false);
                oXHR.addEventListener('error', function() {
                    //失败
                    that.props.onChange("load error");
                }, false);
                oXHR.addEventListener('abort', function() {
                    //上传中断
                    that.props.onChange("load abort");
                }, false);
                oXHR.open('post', action.url);
                formData[name] = oFiles;
                console.log("fromData=", formData);
                oXHR.send(formData);*/
    }

    static defaultProps = {
        name: "file",
        multiple: false,
    }

    render() {
        const children = this.props.children;
        const multiple = this.props.multiple;
        const name = this.props.name;
        console.log("name is", name);
        return (
            <div onClick={this.btnClick.bind(this)} className={this.props.className+' upload'} >
               <input type="file" name={name} onChange={this.uploadFile.bind(this,0)} multiple={multiple} ref="upload"  accept />
              {children}
            </div>
        )
    };
}

/*var fileSelected = function(ob, max, type, actionUrl) {
    debugger;
    let oFiles = ob.files; //读取的文件
    var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
    var eInfo = { typeError: "文件格式必须为图片", sizeError: "图片大小不能超过2M" };
    for (let i = 0; i < oFiles.length; i++) {
        let oFile = oFiles[i];
        if (!rFilter.test(oFile.type)) {
            alert(eInfo.typeError);
            return;
        }
        if (oFile.size > max) {
            alert(eInfo.sizeError);
            return;
        }
    }
    // var oFile = ob.files[0]; //读取文件


    // var vFD = new FormData(document.getElementById('uploadForm')), //建立请求和数据
    var oXHR = new XMLHttpRequest();
    oXHR.addEventListener('load', function(resUpload) {
        //成功
    }, false);
    oXHR.addEventListener('error', function() {
        //失败
    }, false);
    oXHR.addEventListener('abort', function() {
        //上传中断
    }, false);
    oXHR.open('POST', actionUrl);
    oXHR.send(ob);
};*/
