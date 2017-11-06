/**
 * @api {get} /SearchApi/searchAll 搜索全部
 * @apiVersion 2.0.0
 * @apiName searchAll
 * @apiGroup Search
 * @apiPermission login
 *
 * @apiDescription 搜索全部类别。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} keyword 		  搜索关键词
 *
 * @apiSuccess {Boolean}    success   是否成功
 * @apiSuccess {Object[]}   obj       搜索全部结果
 * @apiSuccess {String}     obj.symptomProblem    症状和问题结果
 * @apiSuccess {String}     obj.friendsCircle     朋友圈动态结果
 * @apiSuccess {String}     obj.dailyMethod       保健方法结果
 * @apiSuccess {String}     obj.information       资讯结果
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "symptomProblem": {
 *                 // 同症状和问题搜索
 *             },
 *             "friendsCircle": {
 *                 // 同朋友圈搜索
 *             },
 *             "dailyMethod": {
 *                 // 同保健方法搜索
 *             },
 *             "information": {
 *                 // 同资讯搜索
 *             },
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function searchAll() { return; }

/**
 * @api {get} /SearchApi/searchSymptomProblem 搜索症状和问题
 * @apiVersion 2.0.0
 * @apiName searchSymptomProblem
 * @apiGroup Search
 * @apiPermission login
 *
 * @apiDescription 搜索症状和问题。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} keyword 		    搜索关键词
 * @apiParam {Number} [page=1] 		    当前页码
 * @apiParam {Number} [pageSize=10] 	每页大小
 *
 * @apiSuccess {Boolean}    success               是否成功
 * @apiSuccess {Object[]}   obj                   搜索症状和问题结果
 * @apiSuccess {String}     obj.id                问题ID
 * @apiSuccess {String}     obj.name              问题名称
 * @apiSuccess {Number}     obj.page              当前页码
 * @apiSuccess {Number}     obj.pageSize          每页大小
 * @apiSuccess {Number}     obj.pageCount         总页数
 * @apiSuccess {Number}     obj.count             总条数
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "list": [
 *                 {
 *                     "id": "1",
 *                     "name": "消化不良"
 *                 },
 *                 {
 *                     "id": "2",
 *                     "name": "慢性疲劳"
 *                 },{
 *                     "id": "3",
 *                     "name": "乳腺囊肿"
 *                 },
 *                 ...
 *             ],
 *             "page": 1,
 *             "pageSize": 10,
 *             "pageCount": 5,
 *             "count": 832
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function searchSymptomProblem() { return; }

/**
 * @api {get} /SearchApi/searchFriendsCircle 搜索朋友圈
 * @apiVersion 2.0.0
 * @apiName searchFriendsCircle
 * @apiGroup Search
 * @apiPermission login
 *
 * @apiDescription 搜索朋友圈
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} keyword 		    搜索关键词
 * @apiParam {Number} [page=1] 		    当前页码
 * @apiParam {Number} [pageSize=10] 	每页大小
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function searchFriendsCircle() { return; }

/**
 * @api {get} /SearchApi/searchDailyMethod 搜索保健方法
 * @apiVersion 2.0.0
 * @apiName searchDailyMethod
 * @apiGroup Search
 * @apiPermission login
 *
 * @apiDescription 搜索保健方法
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} keyword 		    搜索关键词
 * @apiParam {Number} [page=1] 		    当前页码
 * @apiParam {Number} [pageSize=10] 	每页大小
 *
 * @apiSuccess {Boolean}    success   是否成功
 * @apiSuccess {Object[]}   obj       搜索保健方法结果
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *           {
 *               "type": "饮食",
 *               "list": ["牛肺", "菜花", "白豆蔻", "粳米", "小麦"],
 *               "page": 1,
 *               "pageSize": 10,
 *               "pageCount": 5,
 *               "count": 832
 *           },
 *           {
 *               "type": "起居",
 *               "list": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ],
 *               "page": 1,
 *               "pageSize": 10,
 *               "pageCount": 5,
 *               "count": 832
 *           },
 *           {
 *               "type": "动",
 *               "list": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ],
 *               "page": 1,
 *               "pageSize": 10,
 *               "pageCount": 5,
 *               "count": 832
 *           },
 *           {
 *               "type": "静",
 *               "list": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ],
 *               "page": 1,
 *               "pageSize": 10,
 *               "pageCount": 5,
 *               "count": 832
 *           },
 *           {
 *               "type": "娱乐",
 *               "methods": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ],
 *               "page": 1,
 *               "pageSize": 10,
 *               "pageCount": 5,
 *               "count": 832
 *           },
 *       ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function searchDailyMethod() { return; }


/**
 * @api {get} /SearchApi/searchTypeDailyMethod 搜索某类保健方法
 * @apiVersion 2.0.0
 * @apiName searchTypeDailyMethod
 * @apiGroup Search
 * @apiPermission login
 *
 * @apiDescription 搜索某类保健方法
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} keyword 		    搜索关键词
 * @apiParam {Number} type 		        保健方法分类，（1:起居；2:动；3:静；4:娱乐；5:饮食）
 * @apiParam {Number} [page=1] 		    当前页码
 * @apiParam {Number} [pageSize=10] 	每页大小
 *
 * @apiSuccess {Boolean}    success   是否成功
 * @apiSuccess {Object[]}   obj       搜索保健方法结果
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "type": "动",
 *             "list": [
 *                 {
 *                     "id": "36",
 *                     "name": "睡前不要吃东西",
 *                     "timePeriod": "睡前"
 *                 },
 *                 ...
 *             ],
 *             "page": 1,
 *             "pageSize": 10,
 *             "pageCount": 5,
 *             "count": 832
 *         },
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function searchTypeDailyMethod() { return; }

/**
 * @api {get} /SearchApi/searchInformation 搜索资讯
 * @apiVersion 2.0.0
 * @apiName searchInformation
 * @apiGroup Search
 * @apiPermission login
 *
 * @apiDescription 搜索全部类别。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} keyword 		    搜索关键词
 * @apiParam {Number} [page=1] 		    当前页码
 * @apiParam {Number} [pageSize=10] 	每页大小
 *
 * @apiUse AuthenticatedError
 *
 */
function searchInformation() { return; }