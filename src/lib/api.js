/*
 * @Author: huyh
 * @Github: 
 * @Date: 2020-03-08 10:07:15
 * @LastEditors: huyh
 * @LastEditTime: 2020-03-08 11:08:05
 * @description: 
 */
import request from './request';
import {videoService} from './env'


/**
 * 获取视频详情
 */
export const getVideoDetail = (data, token) => {
  return request.get(videoService + `video/detail/${data.id}`, data, token)
}

/**
 * 调整投放金额
 */
export const extendPutMoney = (data, token) => {
  return request.post(videoService + `extend/putMoney`, data, token)
}

