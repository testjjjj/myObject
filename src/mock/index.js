/*
 * @Author: cjd
 * @Date: 2019-10-31 13:58:16
 * @LastEditTime: 2019-11-03 12:50:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \display\src\mock\index.js
 */
import Mock from 'mockjs'
import api from '../api/index'
import mockData from './mockData';
/**
 * 一个傻逼的mock封装，只要在data文件夹中新建和api文件夹相同的文件，json文件中属性名用url属性名，可以匹配api自动配置mock
 */
Object.keys(api).forEach(pageKey => {
    let page = api[pageKey]
    Object.keys(page).forEach(urlKey => {
        let Url = page[urlKey].url
        let method = page[urlKey].method
        Mock.mock(Url, method, () => {
            return Mock.mock(mockData[pageKey][urlKey])
        })
    })
})