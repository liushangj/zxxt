import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Index from './../page/Index.vue';

const InternalData = (r)=> { require.ensure( [] , ()=> r( require('@/page/InternalData.vue')), "InternalData" )};
const InternalDataBase = (r)=> { require.ensure( [] , ()=> r( require('@/components/InternalData/Base.vue')), "InternalDataBase" )};
const InternalDataBaseIndex = (r)=> { require.ensure( [] , ()=> r( require('@/components/InternalData/BaseIndex.vue')), "InternalDataBaseIndex" )};
const InternalDataBaseDetail = (r)=> { require.ensure( [] , ()=> r( require('@/components/InternalData/BaseDetail.vue')), "InternalDataBaseDetail" )};
const InternalDataIndexMsg = (r)=> { require.ensure( [] , ()=> r( require('@/components/InternalData/IndexMsg.vue')), "InternalDataIndexMsg" )};
const InternalDataIndexHistory = (r)=> { require.ensure( [] , ()=> r( require('@/components/InternalData/IndexHistory.vue')), "InternalDataIndexHistory" )};

const InternalDataBlackList = (r)=> { require.ensure( [] , ()=> r( require('@/components/InternalData/BlackList.vue')), "InternalDataBlackList" )};
const InternalDataBlackListIndex = (r)=> { require.ensure( [] , ()=> r( require('@/components/InternalData/BlackListIndex.vue')), "InternalDataBlackListIndex" )};


const InternalDataGrade = (r)=> { require.ensure( [] , ()=> r( require('@/components/InternalData/Grade.vue')), "InternalDataGrade" )};
const InternalDataDataShare = (r)=> { require.ensure( [] , ()=> r( require('@/components/InternalData/DataShare.vue')), "InternalDataDataShare" )};
const InternalDataMyInquire = (r)=> { require.ensure( [] , ()=> r( require('@/components/InternalData/MyInquire.vue')), "InternalDataMyInquire" )};
const InternalDataMyShare = (r)=> { require.ensure( [] , ()=> r( require('@/components/InternalData/MyShare.vue')), "InternalDataMyShare" )};



const AllianceData = (r)=> { require.ensure( [] , ()=> r( require('@/page/AllianceData.vue')), "AllianceData" )};
const AllianceBase = (r)=> { require.ensure( [] , ()=> r( require('@/components/AllianceData/Base.vue')), "AllianceBase" )};
const AllianceBlackList = (r)=> { require.ensure( [] , ()=> r( require('@/components/AllianceData/BlackList.vue')), "AllianceBlackList" )};


const DataEntry = (r)=> { require.ensure( [] , ()=> r( require('@/page/DataEntry.vue')), "DataEntry" )};
const CreditEntry = (r)=> { require.ensure( [] , ()=> r( require('@/components/DataEntry/Credit.vue')), "CreditEntry" )};
const BlackListEntry = (r)=> { require.ensure( [] , ()=> r( require('@/components/DataEntry/BlackList.vue')), "BlackListEntry" )};




const BlockChain = (r)=> { require.ensure( [] , ()=> r( require('@/page/BlockChain.vue')), "BlockChain" )};
const Jurisdiction = (r)=> { require.ensure( [] , ()=> r( require('@/components/BlockChain/Jurisdiction.vue')), "Jurisdiction" )};
const Browse = (r)=> { require.ensure( [] , ()=> r( require('@/components/BlockChain/Browse.vue')), "Browse" )};
const BrowseAll = (r)=> { require.ensure( [] , ()=> r( require('@/components/BlockChain/All.vue')), "BrowseAll" )};
const FailureOpera = (r)=> { require.ensure( [] , ()=> r( require('@/components/BlockChain/FailureOpera.vue')), "FailureOpera" )};


const Login = (r)=> { require.ensure( [] , ()=> r( require('@/page/Login.vue')), "Login" )};
const Register = (r)=> { require.ensure( [] , ()=> r( require('@/page/Register.vue')), "Register" )};
const Usercenter = (r)=> { require.ensure( [] , ()=> r( require('@/page/Usercenter.vue')), "Usercenter" )};
const Account = (r)=> { require.ensure( [] , ()=> r( require('@/components/Usercenter/Account.vue')), "Account" )};
const Msg = (r)=> { require.ensure( [] , ()=> r( require('@/components/Usercenter/Msg.vue')), "Msg" )};

const Loans = (r)=> { require.ensure( [] , ()=> r( require('@/page/Loans.vue')), "Loans" )};



Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/',
          name: 'index',
          component: Index,
          redirect : '/index'
      },
      {
          path: '/index',
          name: 'index',
          component: Index
      },
      {
          path: '/internaldata',
          name: 'internaldata',
          component: InternalData,
          redirect : '/internaldata/base',
          children : [//子路由  InternalDataMyInquire
              {
                  path:'base',component: InternalDataBase,name:'internaldata_base',
                  redirect : '/internaldata/base/index',
                  children:[
                      {path:'index',component: InternalDataBaseIndex,name:'InternalDataBaseIndex'},
                      {
                          path:'detail',component: InternalDataBaseDetail,name:'InternalDataBaseDetail',/* */
                          redirect : '/internaldata/base/detail/indexmsg',
                          query:{status:0},
                          children:[
                              {path:'indexmsg',component: InternalDataIndexMsg,name:'InternalDataIndexMsg'},
                              {path:'history/:status',component: InternalDataIndexHistory,name:'InternalDataIndexHistory'}
                          ]
                      }
                  ]
              },
              {
                  path:'blacklist',component: InternalDataBlackList,name:'internaldata_blacklist',
                  redirect : '/internaldata/blacklist/index',/**/
                  children:[
                      {path:'index',component: InternalDataBlackListIndex,name:'InternalDataBlackListIndex'},
                      {
                          path:'detail',component: InternalDataBaseDetail,name:'InternalDataBlackListDetail',/* */
                          redirect : '/internaldata/blacklist/detail/indexmsg',
                          children:[
                              {path:'indexmsg',component: InternalDataIndexMsg,name:'InternalDataBlackListIndexMsg',query:{status:1}},
                              {path:'history/:status',component: InternalDataIndexHistory,name:'InternalDataBlackListIndexHistory'}
                          ]
                      }
                  ]
              },
              {path:'grade',component: InternalDataGrade,name:'internaldata_grade'},
              {
                  path:'datashare',component: InternalDataDataShare,name:'internaldata_datashare',
                  redirect : '/internaldata/datashare/myinquire',
                  children:[
                      {path:'myinquire',component: InternalDataMyInquire,name:'InternalDataMyInquire'},
                      {path:'myshare',component: InternalDataMyShare,name:'InternalDataMyShare'}
                  ]
              }
          ]
      },
      {
          path: '/alliance',
          name: 'alliancedata',
          component: AllianceData,
          redirect : '/alliance/base',
          children : [//子路由  InternalDataMyInquire
              {
                  path: 'base', component: AllianceBase, name: 'alliance_base'
              },
              {
                  path: 'blacklist', component: AllianceBlackList, name: 'alliance_blacklist'
              }
          ]
      },
      {
          path: '/dataentry',
          name: 'dataentry',
          component: DataEntry,
          redirect : '/dataentry/creditentry',
          children : [//子路由  InternalDataMyInquire
              {
                  path: 'creditentry', component: CreditEntry, name: 'creditentry'
              },
              {
                  path: 'blacklistEntry', component: BlackListEntry, name: 'blacklistEntry'
              }
          ]
      },
      {
          path: '/blockchain',
          name: 'blockchain',
          component: BlockChain,
          redirect : '/blockchain/jurisdiction',
          children : [//子路由  InternalDataMyInquire
              {
                  path: 'jurisdiction', component: Jurisdiction, name: 'jurisdiction'
              },
              {
                  path: 'browse', component: Browse, name: 'browse',
                  redirect : '/blockchain/browse/all',
                  children : [//子路由  InternalDataMyInquire
                      {
                          path: 'all', component: BrowseAll, name: 'browseall'
                      },
                      {
                          path: 'ailureopera', component: FailureOpera, name: 'ailureopera'
                      }
                  ]
              }
          ]
      },
      {
          path: '/login',
          name: 'login',
          component: Login
      },
      {
          path: '/register',
          name: 'register',
          component: Register
      },
      {
          path: '/usercenter',
          name: 'usercenter',
          component: Usercenter,
          redirect : '/usercenter/account',
          children : [//子路由
              {
                  path: 'account', component: Account, name: 'account'
              },
              {
                  path: 'msg', component: Msg, name: 'msg'
              }
          ]
      },
      {
          path: '/loans',
          name: 'loans',
          component: Loans
      },
  ]
})

















