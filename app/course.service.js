System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.getCourses = function () {
                    return ["Courses1", "Courses2", "Courses3"];
                };
                ;
                CourseService.prototype.getAnthors = function () {
                    return ["Anthor1", "Anthor2", "Anthor3"];
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map