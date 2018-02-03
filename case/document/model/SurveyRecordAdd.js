/**
 * 添加勘验笔录
 * @param {Object} params 初始化参数
 */
function SurveyRecordAdd(params) {
    this.brief = null;
    if(params){
        for(var key in params){
            if(params.hasOwnProperty(key)){
                var element = params[key];
                this[key] = element;
            }
        }
    }
}

SurveyRecordAdd.prototype.domMap = [
    {
        key: "brief",
        name: "案由",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "startSurvey",
        name: "勘验开始时间",
        type: "date",
        show: function (au) {
            return true;
        }
    },
    {
        key: "endSurvey",
        name: "勘验结束时间",
        type: "date",
        show: function (au) {
            return true;
        }
    },
    {
        key: "place",
        name: "勘验地点",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "instrument",
        name: "勘验仪器",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "content",
        name: "勘验内容",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "responsible",
        name: "勘验负责人",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "responsibleAge",
        name: "年龄",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "responsibleSex",
        name: "性别",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "excutor",
        name: "勘验人员",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "responsiblePosition",
        name: "职务",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "witness",
        name: "当事人或见证人",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "environment",
        name: "现场环境",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "sceneCondition",
        name: "现场实况",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "appendix",
        name: "副页",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
]