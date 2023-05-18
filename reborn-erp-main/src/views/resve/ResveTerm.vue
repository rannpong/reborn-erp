<template>
    <div class="subBody reservation02">
      <h2>{{ contTit }}</h2>
  
      <form action="">
        <div class="searchBox">
          <div class="searchArea">
            <table>
              <colgroup>
                <col style="width:68px;">
                <col>
              </colgroup>
              <tbody>
                <tr>
                  <td colspan="2">
                    <div class="flex-wrap">
                      <div class="date-input-wrap">
                        <div class="date_txt_gruop">
                            <DateTimePicker></DateTimePicker>
                            <span class="date_tilde txt">부터</span>
                        </div>
                        <div class="time_wrap mo_hide">
                            <span>시간</span>
                            <input type="text" />
                        </div>
                        <div class="date_txt_gruop">
                            <DateTimePicker></DateTimePicker>
                            <span class="date_tilde txt">까지</span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                    <th>차종구분</th>
                    <td>
                        <div class="flex-wrap">
                            <div class="frm-wrap check">
                                <div class="frm" v-for="(chkItem, index) in chkItems1" :key="index">
                                    <input type="checkbox" :id="'chk1_' + index" name="chk01" :checked="chkItem.checked" />
                                    <label :for="'chk1_' + index">{{ chkItem.label }}</label>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="btn-search-wrap">
            <div class="btn-wrap">
              <button class="btn sbtn btn_bg02">검색</button>
            </div>
          </div>
        </div>
  
        <div class="data-wrap">
          <div class="data-table-wrap tblScroll verX">
            <div class="tbl_x_scr">
                <table class="data-table-ty01 ty_02">
                    <thead v-for="(tblData, i) in tblDataHeadList" :key="i">
                        <tr>
                            <th rowspan="2">{{ tblData.carType }}</th>
                            <th rowspan="2">{{ tblData.rmiNum }}</th>
                            <th colspan="2">{{ tblData.rsvDate1 }}</th>
                            <th colspan="2">{{ tblData.rsvDate2 }}</th>
                            <th colspan="2">{{ tblData.rsvDate3 }}</th>
                            <th colspan="2">{{ tblData.rsvDate4 }}</th>
                            <th colspan="2">{{ tblData.rsvDate5 }}</th>
                            <th colspan="2">{{ tblData.rsvDate6 }}</th>
                            <th colspan="2">{{ tblData.rsvDate7 }}</th>
                            <th colspan="2">{{ tblData.rsvDate8 }}</th>
                        </tr>
                        <tr>
                            <th>{{ tblData.carPos }}</th>
                            <th>{{ tblData.carRem }}</th>
                            <th>{{ tblData.carPos }}</th>
                            <th>{{ tblData.carRem }}</th>
                            <th>{{ tblData.carPos }}</th>
                            <th>{{ tblData.carRem }}</th>
                            <th>{{ tblData.carPos }}</th>
                            <th>{{ tblData.carRem }}</th>
                            <th>{{ tblData.carPos }}</th>
                            <th>{{ tblData.carRem }}</th>
                            <th>{{ tblData.carPos }}</th>
                            <th>{{ tblData.carRem }}</th>
                            <th>{{ tblData.carPos }}</th>
                            <th>{{ tblData.carRem }}</th>
                            <th>{{ tblData.carPos }}</th>
                            <th>{{ tblData.carRem }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="i" v-for="(tblData, i) in tblDataBodyList">
                        <td>{{ tblData.carType }}</td><!-- 잔여 숫자가 0일시 td에 class="noQuant" 추가 -->
                        <td>{{ tblData.rmiNum }}</td>
                        <td>{{ tblData.rsvDate1 }}</td>
                        <td>{{ tblData.rsvDate2 }}</td>
                        <td>{{ tblData.rsvDate3 }}</td>
                        <td>{{ tblData.rsvDate4 }}</td>
                        <td>{{ tblData.rsvDate5 }}</td>
                        <td>{{ tblData.rsvDate6 }}</td>
                        <td>{{ tblData.rsvDate7 }}</td>
                        <td>{{ tblData.rsvDate8 }}</td>
                        <td>{{ tblData.rsvDate9 }}</td>
                        <td>{{ tblData.rsvDate10 }}</td>
                        <td>{{ tblData.rsvDate11 }}</td>
                        <td>{{ tblData.rsvDate12 }}</td>
                        <td>{{ tblData.rsvDate13 }}</td>
                        <td>{{ tblData.rsvDate14 }}</td>
                        <td>{{ tblData.rsvDate15 }}</td>
                        <td>{{ tblData.rsvDate16 }}</td>
                        </tr>
                        <tr>
                        <td colspan="18" class="none-data">{{ NodataText }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr :key="i" v-for="(tblData, i) in tblDataFootList">
                        <td>{{ tblData.total }}</td>
                        <td>{{ tblData.rmiNum }}</td>
                        <td>{{ tblData.carRem }}</td>
                        <td>{{ tblData.carPos }}</td>
                        <td>{{ tblData.carRem }}</td>
                        <td>{{ tblData.carPos }}</td>
                        <td>{{ tblData.carRem }}</td>
                        <td>{{ tblData.carPos }}</td>
                        <td>{{ tblData.carRem }}</td>
                        <td>{{ tblData.carPos }}</td>
                        <td>{{ tblData.carRem }}</td>
                        <td>{{ tblData.carPos }}</td>
                        <td>{{ tblData.carRem }}</td>
                        <td>{{ tblData.carPos }}</td>
                        <td>{{ tblData.carRem }}</td>
                        <td>{{ tblData.carPos }}</td>
                        <td>{{ tblData.carRem }}</td>
                        <td>{{ tblData.carPos }}</td>
                        </tr>
                    </tfoot>
                    </table>
            </div>
          </div>
          <!-- // table-wrap -->
  
          <div class="tbl-bot-wrap">
            <!-- paging -->
            <Pagination :currentPage="this.page.page" :totalPages="this.page.totalPages" :pageChange="this.onPageChange" />
            <!-- //paging -->
            <div class="btn-wrap">
              <button class="btn cbtn btn_bg01">예약 등록</button>
            </div>
          </div>
        </div>
        <!-- // data-wrap -->
      </form>
    </div>
    <!-- //subBody -->
  </template>
  
  <script lang="ts">
    import Select from '../../components/layout/Select.vue'
    import Pagination from '../../components/layout/Pagination.vue'
    import Popup from '../../components/layout/Popup.vue'
    import DateTimePicker from '../../components/layout/DateTimePicker.vue'
  
    export default {
      name: 'Resve',
      components: {
        Select,
        Pagination,
        Popup,
        DateTimePicker,
      },
      data() {
        return {
            contTit: '예약현황',

            checked: false,
            chkItems1: [
                { id: 1, label:'전체', checked:true, },
                { id: 2, label:'경형' },
                { id: 3, label:'소형' },
                { id: 4, label:'준중형' },
                { id: 5, label:'중형' },
                { id: 6, label:'대형' },
                { id: 7, label:'RV/SUB' },
                { id: 8, label:'승합' },
            ],

            // 페이징
            page: {
                totalCount: 1,
                totalPages: 3,
                page: 0,
                size: 5,
            },

            // table head data
            tblDataHeadList: [
                {
                    carType: '차종',
                    rmiNum: '잔여대수',
                    rsvDate1: '04-11 (화)',
                    rsvDate2: '04-12 (수)',
                    rsvDate3: '04-13 (목)',
                    rsvDate4: '04-14 (금)',
                    rsvDate5: '04-15 (토)',
                    rsvDate6: '04-16 (일)',
                    rsvDate7: '04-17 (월)',
                    rsvDate8: '04-18 (화)',
                    carPos: '보유',
                    carRem: '잔여',
                },                
            ],

            // table footer data
            tblDataFootList: [
                {
                    total: '합계',
                    rmiNum: '12',
                    carRem: '44',
                    carPos: '11',
                }
            ],

            // table body data
            tblDataBodyList: [
                {
                    carType: 'Fuga',
                    rmiNum: '0',
                    rsvDate1: '5',
                    rsvDate2: '1',
                    rsvDate3: '5',
                    rsvDate4: '0',
                    rsvDate5: '5',
                    rsvDate6: '1',
                    rsvDate7: '5',
                    rsvDate8: '1',
                    rsvDate9: '5',
                    rsvDate10: '1',
                    rsvDate11: '5',
                    rsvDate12: '1',
                    rsvDate13: '5',
                    rsvDate14: '1',
                    rsvDate15: '5',
                    rsvDate16: '1',
                    rsvDate17: '5',
                    rsvDate18: '1',
                },
                {
                    carType: 'Fuga',
                    rmiNum: '0',
                    rsvDate1: '5',
                    rsvDate2: '1',
                    rsvDate3: '5',
                    rsvDate4: '0',
                    rsvDate5: '5',
                    rsvDate6: '1',
                    rsvDate7: '5',
                    rsvDate8: '1',
                    rsvDate9: '5',
                    rsvDate10: '1',
                    rsvDate11: '5',
                    rsvDate12: '1',
                    rsvDate13: '5',
                    rsvDate14: '1',
                    rsvDate15: '5',
                    rsvDate16: '1',
                    rsvDate17: '5',
                    rsvDate18: '1',
                },
                {
                    carType: 'Fuga',
                    rmiNum: '0',
                    rsvDate1: '5',
                    rsvDate2: '1',
                    rsvDate3: '5',
                    rsvDate4: '0',
                    rsvDate5: '5',
                    rsvDate6: '1',
                    rsvDate7: '5',
                    rsvDate8: '1',
                    rsvDate9: '5',
                    rsvDate10: '1',
                    rsvDate11: '5',
                    rsvDate12: '1',
                    rsvDate13: '5',
                    rsvDate14: '1',
                    rsvDate15: '5',
                    rsvDate16: '1',
                    rsvDate17: '5',
                    rsvDate18: '1',
                },
                {
                    carType: 'Fuga',
                    rmiNum: '0',
                    rsvDate1: '5',
                    rsvDate2: '1',
                    rsvDate3: '5',
                    rsvDate4: '0',
                    rsvDate5: '5',
                    rsvDate6: '1',
                    rsvDate7: '5',
                    rsvDate8: '1',
                    rsvDate9: '5',
                    rsvDate10: '1',
                    rsvDate11: '5',
                    rsvDate12: '1',
                    rsvDate13: '5',
                    rsvDate14: '1',
                    rsvDate15: '5',
                    rsvDate16: '1',
                    rsvDate17: '5',
                    rsvDate18: '1',
                },
                {
                    carType: 'Fuga',
                    rmiNum: '0',
                    rsvDate1: '5',
                    rsvDate2: '1',
                    rsvDate3: '5',
                    rsvDate4: '0',
                    rsvDate5: '5',
                    rsvDate6: '1',
                    rsvDate7: '5',
                    rsvDate8: '1',
                    rsvDate9: '5',
                    rsvDate10: '1',
                    rsvDate11: '5',
                    rsvDate12: '1',
                    rsvDate13: '5',
                    rsvDate14: '1',
                    rsvDate15: '5',
                    rsvDate16: '1',
                    rsvDate17: '5',
                    rsvDate18: '1',
                },
            ],

            NodataText: '표시할 데이터가 없습니다.',

            //데이터없음 바인딩
            haveData: true,
            noneData: false,

        };
      },
      methods: {},
    };
  </script>
  
  <style scoped></style>
  