var h5;
(function (h5) {
    var application;
    (function (application) {
        var AppService = (function () {
            function AppService(restService, $filter, $q) {
                this.restService = restService;
                this.$filter = $filter;
                this.$q = $q;
            }
            AppService.prototype.getAuthority = function (company, division, m3User, programName, charAt) {
                var _this = this;
                var request = {
                    DIVI: division,
                    USID: m3User,
                    PGNM: programName
                };
                return this.restService.executeM3MIRestService("MDBREADMI", "SelCMNPUS30", request).then(function (val) {
                    if (angular.equals([], val.items)) {
                        request.DIVI = "";
                        return _this.restService.executeM3MIRestService("MDBREADMI", "SelCMNPUS30", request).then(function (val) {
                            if (angular.equals([], val.items)) {
                                return false;
                            }
                            else {
                                var test = val.item.ALO;
                                if (charAt < test.length && '1' == test.charAt(charAt)) {
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            }
                        });
                    }
                    else {
                        var test = val.item.ALO;
                        if (charAt < test.length && '1' == test.charAt(charAt)) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                });
            };
            AppService.prototype.getAlphaZZUDF8Record = function (fileName) {
                var requestData = {
                    KPID: "ZZUDF8",
                    PK01: fileName,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "GetAlphaKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.lstZZUDF8Records = function () {
                var requestData = {
                    KPID: "ZZUDF8",
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "LstAlphaKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.getZZUDF8AlphaRecord = function (PK01, PK02, PK03) {
                var requestData = {
                    KPID: "ZZUDF8",
                    PK01: PK01,
                    PK02: PK02,
                    PK03: PK03,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "GetAlphaKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.getZZUDF8NumericRecord = function (PK01, PK02, PK03) {
                var requestData = {
                    KPID: "ZZUDF8",
                    PK01: PK01,
                    PK02: PK02,
                    PK03: PK03,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "GetNumericKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.getCustomerList = function (company) {
                var requestData = {
                    CONO: company
                };
                return this.restService.executeM3MIRestService("CRS610MI", "LstByName", requestData).then(function (val) { return val; });
            };
            AppService.prototype.saveZZUDF8NumericRecord = function (pk01, pk02, pk03, n096, n196, n296, n396, n496, n596, n696, n796, n896, n996) {
                var requestData = {
                    KPID: "ZZUDF8",
                    PK01: pk01,
                    PK02: pk02,
                    PK03: pk03,
                    N096: n096,
                    N196: n196,
                    N296: n296,
                    N396: n396,
                    N496: n496,
                    N596: n596,
                    N696: n696,
                    N796: n796,
                    N896: n896,
                    N996: n996,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "ChgNumericKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.saveZZUDF8AlphaRecord = function (pk01, pk02, pk03, al30, al31, al32, al33, al34, al35, al36) {
                var requestData = {
                    KPID: "ZZUDF8",
                    PK01: pk01,
                    PK02: pk02,
                    PK03: pk03,
                    AL30: al30,
                    AL31: al31,
                    AL32: al32,
                    AL33: al33,
                    AL34: al34,
                    AL35: al35,
                    AL36: al36,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "ChgAlphaKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.addZZUDF8AlphaRecord = function (pk01, pk02, pk03, al30, al31, al32, al33, al34, al35, al36) {
                var requestData = {
                    KPID: "ZZUDF8",
                    PK01: pk01,
                    PK02: pk02,
                    PK03: pk03,
                    AL30: al30,
                    AL31: al31,
                    AL32: al32,
                    AL33: al33,
                    AL34: al34,
                    AL35: al35,
                    AL36: al36,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "AddAlphaKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.addZZUDF8Numeric = function (pk01, pk02, pk03, n096, n196, n296, n396, n496, n596, n696, n796, n896, n996) {
                var requestData = {
                    KPID: "ZZUDF8",
                    PK01: pk01,
                    PK02: pk02,
                    PK03: pk03,
                    N096: n096,
                    N196: n196,
                    N296: n296,
                    N396: n396,
                    N496: n496,
                    N596: n596,
                    N696: n696,
                    N796: n796,
                    N896: n896,
                    N996: n996,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "AddNumericKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.deleteZZUDF8AlphaRecord = function (pk01, pk02, pk03) {
                var requestData = {
                    KPID: "ZZUDF8",
                    PK01: pk01,
                    PK02: pk02,
                    PK03: pk03,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "DelAlphaKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.deleteZZUDF8NumericRecord = function (pk01, pk02, pk03) {
                var requestData = {
                    KPID: "ZZUDF8",
                    PK01: pk01,
                    PK02: pk02,
                    PK03: pk03,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "DelNumericKPI", requestData).then(function (val) { return val; });
            };
            AppService.$inject = ["RestService", "$filter", "$q"];
            return AppService;
        }());
        application.AppService = AppService;
    })(application = h5.application || (h5.application = {}));
})(h5 || (h5 = {}));
