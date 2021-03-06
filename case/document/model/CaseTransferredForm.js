// 案件移送呈批表
function CaseTransferredForm(param0, param1, param2) {
  this.brief = null;
  this.receiveTime = Date.today().toString("yyyy-MM-dd");
  this.occurTime = Date.today().toString("yyyy-MM-dd");
  this.occurPlace = null;
  this.objectName = null;
  this.responsible = null;
  this.address = null;
  this.phone = null;
  this.transferDepart = null;
  this.contentAndReason = null;
  this.evidence = null;
  this.excutor = null;
  this.excuteDate = Date.today().toString("yyyy-MM-dd");
  this.examSuggestion = null;
  this.examDate = Date.today().toString("yyyy-MM-dd");
  this.leader = null;
  this.reExamSuggestion = null;
  this.reExamDate = Date.today().toString("yyyy-MM-dd");
  if (param0) {
    for (var key in this) {
      if (param0.hasOwnProperty(key)) {
        this[key] = param0[key];
      }
    }
  }
  if (param1) {
    for (var key in this) {
      if (param1.hasOwnProperty(key)) {
        this[key] = param1[key];
      }
    }
  }
  if (param2) {
    for (var key in this) {
      if (param2.hasOwnProperty(key)) {
        this[key] = param2[key];
      }
    }
  }
  this.receiveTime = this.receiveTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.occurTime = this.occurTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.excuteDate = this.excuteDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.examDate = this.examDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.reExamDate = this.reExamDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
}

CaseTransferredForm.prototype.toExamForm = function (caseID, caseType, reExamResponsible) {
  return {
    caseID: caseID,
    caseId: caseID,
    caseName: this.brief,
    caseType: caseType,
    documentName: "案件移送呈批表",
    examDate: this.examDate,
    examResponsible: this.examResponsible,
    examSuggestion: this.examSuggestion,
    leader: reExamResponsible.realname,
    userId: reExamResponsible.uid,
    userName: reExamResponsible.realname
  }
}

CaseTransferredForm.prototype.toReExamForm = function (caseID) {
  return {
    caseID: this.case_id || caseID,
    leader: this.leader,
    reExamDate: Date.parse(this.reExamDate).toString("yyyy年MM月dd日"),
    reExamSuggestion: this.reExamSuggestion
  }
}

CaseTransferredForm.prototype.domMap = [
  {
    key: "brief",
    name: "案由",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "receiveTime",
    name: "接案时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "occurTime",
    name: "发案时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "occurPlace",
    name: "发案地点",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "objectName",
    name: "当事人（单位）",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "responsible",
    name: "法定代表人（负责人）",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "address",
    name: "地址",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "phone",
    name: "联系方式",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "transferDepart",
    name: "受移送机关",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "contentAndReason",
    name: "主要案情及移送理由",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "evidence",
    name: "拟移送的证据材料及物品",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "excutor",
    name: "经办人",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "excuteDate",
    name: "办理时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "examSuggestion",
    name: "审核意见",
    type: (function () {
      var au = JSON.parse(localStorage.getItem("au"));
      var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
      if (code < 4) return "p";
      else if (code < 8) return "textarea";
      else return "p";
    })(),
    show: function (au) {
      return true;
    },
    get: function (params) {
      return params[this.key];
    }
  }, {
    key: "examDate",
    name: "审核日期",
    type: (function () {
      var au = JSON.parse(localStorage.getItem("au"));
      var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
      if (code < 4) return "span";
      else if (code < 8) return "date";
      else return "span";
    })(),
    show: function (au) {
      return true;
    },
    get: function (params) {
      return this.type === "date" ? params[this.key] : Date.parse(params[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "leader",
    name: "主管领导",
    type: (function () {
      var au = JSON.parse(localStorage.getItem("au"));
      var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
      if (code < 4) return "span";
      else if (code < 8) return "select";
      else return "span";
    })(),
    show: function (au) {
      return true;
    },
    get: function (params) {
      return params[this.key];
    }
  }, {
    key: "reExamSuggestion",
    name: "审批意见",
    type: (function () {
      var au = JSON.parse(localStorage.getItem("au"));
      var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
      if (code < 8) return "p";
      else return "textarea";
    })(),
    show: function (au) {
      return true;
    },
    get: function (params) {
      return params[this.key];
    }
  }, {
    key: "reExamDate",
    name: "审批日期",
    type: (function () {
      var au = JSON.parse(localStorage.getItem("au"));
      var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
      if (code < 8) return "p";
      else return "date";
    })(),
    show: function (au) {
      return true;
    },
    get: function (params) {
      return this.type === "date" ? params[this.key] : Date.parse(params[this.key]).toString("yyyy年MM月dd日");
    }
  }
];
