/**
 * @api {get} /ThemeApi/getThemeList 主题场景类型类型获取主题列表数据。
 * @apiVersion 2.0.0
 * @apiName getUserScoreList
 * @apiGroup Theme
 * @apiPermission login
 *
 * @apiDescription 主题场景类型类型获取主题列表数据
 * @apiParam {String} type		    类型:场景类型(work:工作，traffic:交通，home:家，other:其他)
 * @apiParam {Number} [page=1] 	每页大小
 * @apiParam {Number} [pageSize=10] 	每页大小
 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getUserScoreList() { return; }
/**
 * @api {get} /ThemeApi/getEveryDayRecommend 获取今日推荐的活动。
 * @apiVersion 2.0.0
 * @apiName getEveryDayRecommend
 * @apiGroup Theme
 * @apiPermission login
 *
 * @apiDescription 获取今日推荐的活动
 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getEveryDayRecommend() { return; }

/**
 * @api {get} /ThemeApi/payTheme 主题场景付款。
 * @apiVersion 2.0.0
 * @apiName payTheme
 * @apiGroup Theme
 * @apiPermission login
 *
 * @apiDescription 主题场景付款。
 * @apiParam {Number} id	每页大小
 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function payTheme() { return; }



