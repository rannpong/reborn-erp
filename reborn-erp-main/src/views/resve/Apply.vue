<template>
  <div class="subBody rsvDetail01">
      <h2>{{ contTit }}</h2>
      <div class="btn-wrap align_right">
          <button class="btn cbtn btn_bg04">목록</button>
          <button class="btn cbtn btn_bg01">예약등록</button>
      </div>

      <!-- 예약정보 -->
      <div class="info-box-wrap">
          <div class="info-tit-box">
              <h3 class="infoTit">{{ infoTit1 }}</h3>
          </div>
          <div class="info-cont-box">
              <div class="table-list-wrap">
                  <table class="data-table-ty03">
                      <caption>{{ infoTit1 }}</caption>
                      <tbody :key="i" v-for="(tblInfo, i) in tblInfoList01">
                          <tr>
                              <th>{{ tblInfo.rsvNum }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_rsvNum" readonly />
                                  </div>
                              </td>
                              <th>{{ tblInfo.agentRsvNum }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_agentRsvNum" readonly />
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th>{{ tblInfo.rcpDate }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_rcpDate" readonly />
                                  </div>
                              </td>
                              <th>{{ tblInfo.rcpName }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_rcpName" readonly />
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th>{{ tblInfo.rsvPeriod }}<span class="ico_essential"></span></th>
                              <td>
                                  <div class="flex-wrap">
                                      <div class="date-input-wrap">
                                          <DateTimePicker placeholder="예약 시작일을 선택해주세요."></DateTimePicker>
                                          <span class="date_tilde">~</span>
                                          <DateTimePicker placeholder="예약 종료일을 선택해주세요."></DateTimePicker>
                                      </div>
                                  </div>
                              </td>
                              <th>{{ tblInfo.useHours }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_useHours" readonly />
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th>{{ tblInfo.company }}<span class="ico_essential"></span></th>
                              <td>
                                  <div class="flex-wrap">
                                      <Select :options="selectOption1" name="selectOption1" id="selectOption1" :default="'신속렌트카'" />
                                  </div>
                              </td>
                              <th>{{ tblInfo.carType }}<span class="ico_essential"></span></th>
                              <td>
                                  <div class="flex-wrap">                                        
                                      <Select :options="selectOption2" name="selectOption2" id="selectOption2" :default="'TOYOTA YARiS'" />
                                      <div class="btn-wrap ">
                                          <button class="btn tbtn btn_bg04" @click="rsvCarAvailOpen()">현황조회</button>
                                      </div>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th>{{ tblInfo.startPlace }}<span class="ico_essential"></span></th>
                              <td>
                                  <div class="flex-wrap">
                                      <Select :options="selectOption3" name="selectOption3" id="selectOption3" :default="'본사'" />
                                  </div>
                              </td>
                              <th>{{ tblInfo.endPlace }}<span class="ico_essential"></span></th>                                
                              <td>
                                  <div class="flex-wrap">
                                      <Select :options="selectOption4" name="selectOption4" id="selectOption4" :default="'본사'" />
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th>{{ tblInfo.rsvConfirm }}</th>
                              <td colspan="3">
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_rsvConfirm" readonly />
                                      <div class="frm-wrap check">
                                          <div class="frm" v-for="(chkItem, index) in chkItems1" :key="index">
                                              <input type="checkbox" :id="'chk4_' +index" name="chk04" />
                                              <label :for="'chk4_' + index">{{ chkItem.label }}</label>
                                          </div>
                                      </div>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <!-- // 예약정보 -->

      <!-- 예약자 정보 -->
      <div class="info-box-wrap">
          <div class="info-tit-box">
              <h3 class="infoTit">{{ infoTit2 }}</h3>
          </div>
          <div class="info-cont-box">
              <div class="table-list-wrap">
                  <table class="data-table-ty03">
                      <caption>{{ infoTit2 }}</caption>
                      <tbody :key="i" v-for="(tblInfo, i) in tblInfoList02">
                          <tr>
                              <th>{{ tblInfo.rsvName }}<span class="ico_essential"></span></th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_rsvName" />
                                  </div>
                              </td>
                              <th>{{ tblInfo.rsvUser }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_rsvUser" />
                                  </div>
                              </td>
                              <th>{{ tblInfo.userNum }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_userNum" />
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th>{{ tblInfo.phone }}<span class="ico_essential"></span></th>
                              <td>
                                  <div class="flex-wrap">
                                      <div class="messageSend">
                                          <input type="text" v-model="td_phone" />
                                          <span class="ico_msgSend"></span>
                                      </div>
                                  </div>
                              </td>
                              <th>{{ tblInfo.email }}<span class="ico_essential"></span></th>
                              <td colspan="3">
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_email" />
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th>{{ tblInfo.fromFlightNum }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_fromFlightNum" />
                                  </div>
                              </td>
                              <th>{{ tblInfo.etc }}</th>
                              <td colspan="3">
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_etc" />
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <!-- // 예약자 정보 -->

      <!-- 보험 및 편의장비 -->
      <div class="info-box-wrap">
          <div class="info-tit-box">
              <h3 class="infoTit">{{ infoTit3 }}</h3>
          </div>
          <div class="info-cont-box">
              <div class="table-list-wrap">
                  <table class="data-table-ty03">
                      <caption>{{ infoTit3 }}</caption>
                      <colgroup>
                          <col style="width:15%">
                          <col style="">
                      </colgroup>
                      <tbody :key="i" v-for="(tblInfo, i) in tblInfoList03">
                          <tr>
                              <th>{{ tblInfo.insSelec }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <Select :options="selectOption5" name="selectOption5" id="selectOption5" :default="'전액무제한면책'" />
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th>{{ tblInfo.inspremium }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_inspremium" class="priceInput" readonly />
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th>{{ tblInfo.optSelec }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <Select :options="selectOption6" name="selectOption6" id="selectOption6" :default="'장비선택 후 추가를 눌러주세요.'" />
                                      <div class="btn-wrap">
                                          <button class="btn tbtn btn_bg04 icoBtn icoPlus">추가</button>
                                      </div>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th>{{ tblInfo.optSelecTotal }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_optSelecTotal" class="priceInput" readonly />
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <!-- // 보험 및 편의장비 -->

      <!-- 결제(요금)정보 -->
      <div class="info-box-wrap">
          <div class="info-tit-box">
              <h3 class="infoTit">{{ infoTit4 }}</h3>
          </div>
          <div class="info-cont-box">
              <div class="table-list-wrap">
                  <table class="data-table-ty03">
                      <caption>{{ infoTit4 }}</caption>
                      <tbody :key="i" v-for="(tblInfo, i) in tblInfoList04">
                          <tr>
                              <th>{{ tblInfo.price1 }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_price1" class="priceInput" />
                                      <div class="frm-wrap check">
                                          <div class="frm" v-for="(chkItem, index) in chkItems2" :key="index">
                                              <input type="checkbox" :id="'chk1_' +index" name="chk01" />
                                              <label :for="'chk1_' + index">{{ chkItem.label }}</label>
                                          </div>
                                      </div>
                                  </div>
                              </td>
                              <th>{{ tblInfo.price2 }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_price2" class="priceInput" />
                                      <div class="frm-wrap check">
                                          <div class="frm" v-for="(chkItem, index) in chkItems2" :key="index">
                                              <input type="checkbox" :id="'chk1_' +index" name="chk01" />
                                              <label :for="'chk1_' + index">{{ chkItem.label }}</label>
                                          </div>
                                      </div>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th>{{ tblInfo.price3 }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_price3" class="priceInput" />
                                      <div class="frm-wrap check">
                                          <div class="frm" v-for="(chkItem, index) in chkItems2" :key="index">
                                              <input type="checkbox" :id="'chk1_' +index" name="chk01" />
                                              <label :for="'chk1_' + index">{{ chkItem.label }}</label>
                                          </div>
                                      </div>
                                  </div>
                              </td>
                              <th>{{ tblInfo.price4 }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_price4" class="priceInput" />
                                      <div class="frm-wrap check">
                                          <div class="frm" v-for="(chkItem, index) in chkItems2" :key="index">
                                              <input type="checkbox" :id="'chk1_' +index" name="chk01" />
                                              <label :for="'chk1_' + index">{{ chkItem.label }}</label>
                                          </div>
                                      </div>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th>{{ tblInfo.price5 }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_price5" class="priceInput" />
                                      <div class="frm-wrap check">
                                          <div class="frm" v-for="(chkItem, index) in chkItems2" :key="index">
                                              <input type="checkbox" :id="'chk1_' +index" name="chk01" />
                                              <label :for="'chk1_' + index">{{ chkItem.label }}</label>
                                          </div>
                                      </div>
                                  </div>
                              </td>
                              <th>{{ tblInfo.price6 }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_price6" class="priceInput" />
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th>{{ tblInfo.price7 }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_price7" class="priceInput ty_02" readonly />
                                  </div>
                              </td>
                              <th>{{ tblInfo.price8 }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_price8" class="priceInput ty_02" readonly />
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th>{{ tblInfo.price9 }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_price9" class="priceInput ty_03" readonly />
                                      <div class="btn-wrap">
                                          <button class="btn tbtn btn_bg04" @click="dpsMngOpen">입금관리</button>
                                      </div>
                                  </div>
                              </td>
                              <th>{{ tblInfo.price10 }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <input type="text" v-model="td_price10" class="priceInput ty_02" readonly />
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <!-- // 결제(요금)정보 -->

      <!-- 비고 -->
      <div class="info-box-wrap">
          <div class="info-tit-box">
              <h3 class="infoTit">{{ infoTit5 }}</h3>
          </div>
          <div class="info-cont-box">
              <div class="table-list-wrap">
                  <table class="data-table-ty03">
                      <caption>{{ infoTit5 }}</caption>
                      <colgroup>
                          <col style="width:15%">
                          <col style="">
                      </colgroup>
                      <tbody :key="i" v-for="(tblInfo, i) in tblInfoList05">
                          <tr>
                              <th>{{ tblInfo.remarks1 }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <textarea placeholder="비고사항을 입력하세요." v-model="td_remarks1"></textarea>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th>{{ tblInfo.remarks2 }}</th>
                              <td>
                                  <div class="flex-wrap">
                                      <textarea placeholder="내부전달 사항을 입력하세요." v-model="td_remarks2"></textarea>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <!-- // 비고 -->

      <div class="btn-wrap align_right">
          <button class="btn cbtn btn_bg04">목록</button>
          <button class="btn cbtn btn_bg01">예약등록</button>
      </div>

  </div><!-- // subBody -->


<!-----
팝업     
---->


    <div class="dimmed" v-show="popDimmed"></div>

  <!-- popup : 예약 등록 : 필수입력 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
    <template #popupBody>
      <p>필수 입력 항목(*)은 모두 입력해야 합니다.</p>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
          <button class="btn cbtn btn_bg01">확인</button>
      </div>
    </template>
  </Popup> -->
  <!-- // popup -->

  <!-- popup : 예약등록 : 등록 확인 -->
  <!-- <Popup ref="popup" class="small" @close="closePopup()">
    <template #popupBody>
      <p>해당 예약을 등록 하시겠습니까?</p>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
          <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
          <button class="btn cbtn btn_bg01">확인</button>
      </div>
    </template>
  </Popup> -->
  <!-- // popup -->

  <!-- popup : 예약 등록 : 등록확인 완료 -->
  <!-- <Popup ref="popup" class="small"  @close="closePopup()">
    <template #popupBody>
      <p>해당 예약이 등록되었습니다.</p>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
          <button class="btn cbtn btn_bg01">확인</button>
      </div>
    </template>
  </Popup> -->
  <!-- // popup -->

  <!-- popup : 예약입금관리 -->
  <Popup ref="popup" v-show="popDeposit" @close="closePopup()">
      <template #popupHead>
          <h2>{{ popTit1 }}</h2>
      </template>
      <template #popupBody>
          <div class="tblScroll">
              <table class="data-table-ty04">
                    <caption>{{ popTit1 }}</caption>
                    <colgroup class="mo_hide">
                        <col style="width:15%">
                        <col>
                        <col style="width:15%">
                        <col>
                    </colgroup>
                    <tbody :key="i" v-for="(tblItem, i) in tblList01">
                        <tr>
                            <th>{{ tblItem.rsvNum }}</th>
                            <td>
                                <input type="text" v-model="tblItem.td_rsvNum" readonly />
                            </td>
                            <th>{{ tblItem.dpsDate }}</th>
                            <td>
                                <input type="text" v-model="tblItem.td_dpsDate" />
                            </td>
                        </tr>
                        <tr>
                            <th>{{ tblItem.cusDps }}</th>
                            <td class="t_right">{{ tblItem.td_cusDps }}</td>
                            <th>{{ tblItem.totalCharge }}</th>
                            <td class="t_right">{{ tblItem.td_totalCharge }}</td>
                        </tr>
                        <tr>
                            <th>{{ tblItem.dpsAcc }}</th>
                            <td class="t_right">{{ tblItem.td_dpsAcc }}</td>
                            <th>{{ tblItem.balance }}</th>
                            <td class="t_right">{{ tblItem.td_balance }}</td>
                        </tr>
                    </tbody>
              </table>
              <table class="data-table-ty04 ty_admin">
                  <caption>{{ popTit1 }}</caption>
                  <colgroup class="mo_hide">
                      <col style="width:15%">
                      <col style="">
                      <col style="width:15%">
                      <col style="">
                  </colgroup>
                  <tbody :key="i" v-for="(tblItem, i) in tblList02">
                      <tr>
                          <th>{{ tblItem.dpsAmo }}</th>
                          <td>
                              <input type="text" v-model="tblItem.td_dpsAmo" />
                          </td>
                          <th>{{ tblItem.dpsform }}</th>
                          <td>                            
                              <Select :options="selectOption8" name="selectOption8" id="selectOption8" :default="'현금'" />
                          </td>
                      </tr>
                      <tr>
                          <th>{{ tblItem.rfnAmo }}</th>                        
                          <td class="t_right">
                              <input type="text" v-model="tblItem.td_rfnAmo" />
                          </td>
                          <th>{{ tblItem.rcpIst }}</th>                        
                          <td class="t_right">
                              <input type="text" v-model="tblItem.td_rcpIst" />
                          </td>
                      </tr>
                      <tr>
                          <th>{{ tblItem.etc }}</th>                        
                          <td class="t_right" colspan="3">
                              <input type="text" v-model="tblItem.td_etc" />
                          </td>
                      </tr>
                  </tbody>
              </table>
              
              <div class="btn-wrap tbl_admin_btn">
                  <button class="btn cbtn btn_bg03">다시작성</button>
                  <button class="btn cbtn btn_bg01">등록</button>
              </div>

              <div class="tblScroll verX">
                <div class="tbl_x_scr">
                    <table class="data-table-ty02">
                        <caption>{{ popTit1 }}</caption>
                        <thead :key="i" v-for="(tblItem, i) in tblHeadList">
                            <tr>
                                <th>{{ tblItem.dpsDate }}</th>
                                <th>{{ tblItem.depositor }}</th>
                                <th>{{ tblItem.dpsAmo }}</th>
                                <th>{{ tblItem.rfnAmo }}</th>
                                <th>{{ tblItem.dpsform }}</th>
                                <th>{{ tblItem.rcpIst }}</th>
                            </tr>
                        </thead>
                        <tbody :key="i" v-for="(tblItem, i) in tblBodyList">
                            <tr>
                                <td>{{ tblItem.dpsDate }}</td>
                                <td>{{ tblItem.depositor }}</td>
                                <td class="t_right">{{ tblItem.dpsAmo }}</td>
                                <td class="t_right">{{ tblItem.rfnAmo }}</td>
                                <td>{{ tblItem.dpsform }}</td>
                                <td>{{ tblItem.rcpIst }}</td>
                            </tr>
                        </tbody>
                        </table>
                </div>
              </div>
          </div>
      </template>
      <template #popupBtn>
          <div class="btn-wrap">
              <button class="btn cbtn btn_bg04" @click="closePopup()">닫기</button>
          </div>
      </template>
  </Popup>
  <!-- // popup -->

  <!-- popup : 예약가능 차종검색 -->
  <Popup ref="popup" v-show="popRsvCarAvail" @close="closePopup()">
      <template #popupHead>
          <h2>{{ popTit3 }}</h2>
      </template>
      <template #popupBody>
        <div class="tblScroll">
            <div class="searchBox">
                <div class="searchArea">
                    <table>
                        <caption>{{ popTit3 }}</caption>
                        <colgroup>
                            <col style="width:15%" />
                            <col style="" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>예약기간</th>
                                <td>
                                    <div class="flex-wrap">
                                        <div class="date-input-wrap">
                                            <DateTimePicker></DateTimePicker>
                                            <span class="date_tilde">~</span>
                                            <DateTimePicker></DateTimePicker>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>차종분류</th>
                                <td>
                                    <div class="flex-wrap">
                                        <Select :options="selectOption9" name="selectOption9" id="selectOption9" :default="'전체'" />
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

            <table class="data-table-ty02 ty_02">
                <caption>{{ popTit1 }}</caption>
                <colgroup>
                    <col style="width:33.33%">
                    <col style="width:33.33%">
                    <col style="">
                </colgroup>
                <thead :key="i" v-for="(tblItem, i) in tblHeadList03">
                    <tr>
                        <th>{{ tblItem.carName }}</th>
                        <th>{{ tblItem.carNop }}</th>
                        <th>{{ tblItem.carApply }}</th>
                    </tr>
                </thead>
                <tbody :key="i" v-for="(tblItem, i) in tblBodyList03">
                    <tr>
                        <td>{{ tblItem.carName }}</td>
                        <td :class="{ noQuant: tblItem.isNoQuant }">{{ tblItem.carNop }}</td>
                        <td>
                            <div class="btn-wrap">
                                <button class="btn tbtn btn_bg01">적용</button>                                    
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </template>
      <template #popupBtn>
          <div class="btn-wrap">
              <button class="btn cbtn btn_bg04" @click="closePopup()">닫기</button>
          </div>
      </template>
  </Popup>
  <!-- // popup -->
  
  <!-- popup : 예약불가경고 -->
  <!-- <Popup ref="popup" @close="closePopup()">
      <template #popupHead>
          <h2>{{ popTit2 }}</h2>
      </template>
      <template #popupBody>
          <div class="tblScroll">
              <table class="data-table-ty04">
                  <caption>{{ popTit2 }}</caption>
                  <colgroup>
                      <col style="width:20%">
                      <col style="">
                  </colgroup>
                  <tbody :key="i" v-for="(tblItem, i) in tblList03">
                      <tr>
                          <th>{{ tblItem.carType }}</th>
                          <td>
                              <input type="text" v-model="tblItem.td_carType" readonly />
                          </td>
                      </tr>
                      <tr>
                          <th>{{ tblItem.rsvPeriod }}</th>
                          <td>
                              <div class="date-input-wrap">                                    
                                  <DateTimePicker placeholder="시작일을 선택해주세요."></DateTimePicker>
                                  <span class="date_tilde">~</span>
                                  <DateTimePicker placeholder="종료일을 선택해주세요."></DateTimePicker>
                              </div>
                          </td>
                      </tr>
                  </tbody>
              </table>

              <table class="data-table-ty02">
                  <caption>{{ popTit1 }}</caption>
                  <colgroup>
                      <col style="width:33.33%">
                      <col style="">
                      <col style="">
                  </colgroup>
                  <thead :key="i" v-for="(tblItem, i) in tblHeadList02">
                      <tr>
                          <th>{{ tblItem.date }}</th>
                          <th>{{ tblItem.quantity }}</th>
                          <th>{{ tblItem.remQuant }}</th>
                      </tr>
                  </thead>
                  <tbody :key="i" v-for="(tblItem, i) in tblBodyList02">
                      <tr>
                          <td>{{ tblItem.date }}</td>
                          <td>{{ tblItem.quantity }}</td>
                          <td :class="{ noQuant: tblItem.isNoQuant }">{{ tblItem.remQuant }}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </template>
      <template #popupBtn>
          <div class="btn-wrap">
              <button class="btn cbtn btn_bg04" @click="closePopup()">닫기</button>
              <button class="btn cbtn btn_bg01">OVER 예약</button>
          </div>
      </template>
  </Popup> -->
  <!-- // popup -->

</template>

<script lang="ts">
import Select from '../../components/layout/Select.vue'
import Pagination from '../../components/layout/Pagination.vue'
import Popup from '../../components/layout/Popup.vue'
import DateTimePicker from '../../components/layout/DateTimePicker.vue'

export default {
  name: 'Apply',    
  components: {
      Select,
      Pagination,
      Popup,
      DateTimePicker,
  },
  data() {
      return {            
          contTit: '예약접수',

          // 예약정보
          infoTit1: '예약정보',
          
          // 예약정보 리스트 타이틀
          tblInfoList01: [
              { 
                  rsvNum: '예약번호',
                  agentRsvNum: '에이전트 예약번호',
                  rcpDate: '접수일시',
                  rcpName: '접수자',
                  rsvPeriod: '예약기간',
                  useHours: '이용시간',
                  company: '거래처',
                  carType: '차종',
                  startPlace: '배차장소',
                  endPlace: '반납장소',
                  rsvConfirm: '예약확인',
              },
          ],

          // 예약정보 리스트 텍스트
          td_rsvNum: '',
          td_agentRsvNum: '',
          td_rcpDate: '',
          td_rcpName: '홍길동',
          td_useHours: '2일 0시간(총 48시간)',
          td_rsvConfirm: '',

          // 거래처
          selectOption1: [
              { label: '리스트01', value: 'default' },
              { label: '리스트02', value: 'opt1' },
              { label: '리스트03', value: 'opt2' },
              { label: '리스트04', value: 'opt3' },
          ],
          
          // 차종
          selectOption2: [
              { label: '리스트01', value: 'default' },
              { label: '리스트02', value: 'opt1' },
              { label: '리스트03', value: 'opt2' },
              { label: '리스트04', value: 'opt3' },
          ],

          // 배차장소
          selectOption3: [
              { label: '본사', value: 'default' },
              { label: '셔틀', value: 'opt1' },
              { label: '공항', value: 'opt2' },
          ],

          // 반납장소
          selectOption4: [
              { label: '본사', value: 'default' },
              { label: '셔틀', value: 'opt1' },
              { label: '공항', value: 'opt2' },
          ],

          // 예약확인
          chkItems1:[
              { id: 1, label:'예약확인' },
          ],

          // 예약자 정보
          infoTit2: '예약자 정보',

          // 예약자 정보 리스트 타이틀
          tblInfoList02: [
              {
                  rsvName: '예약자',
                  rsvUser: '사용자',
                  userNum: '사용인원',
                  phone: '전화번호',
                  email: '이메일',
                  fromFlightNum: '출발편명',
                  etc: '기타사항',
              },
          ],

          // 예약자 정보 리스트 텍스트
          td_rsvName: '',
          td_rsvUser: '',
          td_userNum: '',
          td_phone: '',
          td_email: '',
          td_fromFlightNum: '',
          td_etc: '',

          // 보험 및 편의장비
          infoTit3: '보험 및 편의장비',

          tblInfoList03: [
              {
                  insSelec: '보험선택',
                  inspremium: '보험료 계',
                  optSelec: '옵션 선택',
                  optSelecTotal: '옵션 선택 계',
              },
          ],

          td_inspremium: '0',
          td_optSelec1: '카시트 (0~1세)',
          td_optSelec2: '유모차',
          td_optSelecTotal: '0',

          // 보험선택
          selectOption5: [
              { label: '전액무제한면책', value: 'default' },
              { label: '리스트02', value: 'opt1' },
              { label: '리스트03', value: 'opt2' },
              { label: '리스트04', value: 'opt3' },
          ],

          // 옵션 장비선택
          selectOption6: [
              { label: '리스트01', value: 'default' },
              { label: '리스트02', value: 'opt1' },
              { label: '리스트03', value: 'opt2' },
              { label: '리스트04', value: 'opt3' },
          ],

          // 수량
          selectOption7: [
              { label: '1', value: 'default' },
              { label: '2', value: 'opt1' },
              { label: '3', value: 'opt2' },
              { label: '4', value: 'opt3' },
          ],

          td_optPrice1: '9,000',
          td_optPrice2: '11,000',

          // 결제(요금)정보
          infoTit4: '결제(요금)정보',
         
          tblInfoList04: [
              {
                  price1: '대여료',
                  price2: '배/회차료',
                  price3: '보험료',
                  price4: '옵션선택',
                  price5: '기타요금',
                  price6: '현직불',
                  price7: '요금합계',
                  price8: '고객잔금',
                  price9: '예약입금',
                  price10: '잔금',
              },
          ],

          td_price1: '0',
          td_price2: '0',
          td_price3: '0',
          td_price4: '0',
          td_price5: '0',
          td_price6: '0',
          td_price7: '0',
          td_price8: '0',
          td_price9: '0',
          td_price10: '0',

          chkItems2:[
              { id: 1, label:'후불' },
          ],

          // 비고
          infoTit5: '비고',

          tblInfoList05: [
              {
                  remarks1: '비고 사항',
                  remarks2: '내부전달 사항',
              },
          ],

          td_remarks1: '',
          td_remarks2: '',

          
          popDimmed: false,
          
          // 예약입금관리
          popDeposit:false,
          popTit1: '예약입금관리',

          tblList01: [
              {
                  rsvNum: '예약번호',
                  dpsDate: '입금날짜',
                  cusDps: '고객입금',
                  totalCharge: '요금합계',
                  dpsAcc: '입금계', 
                  balance: '잔금',

                  td_rsvNum: '123456789-1234',
                  td_dpsDate: '2023-03-25',
                  td_cusDps: '30,000',
                  td_totalCharge: '115,200',
                  td_dpsAcc: '115,200',
                  td_balance: '0',
              },
          ],

          tblList02: [
              {
                  dpsAmo: '입금액',
                  dpsform: '입금방법',
                  rfnAmo: '환불액',
                  rcpIst: '수납사원',
                  etc: '비고', 

                  td_dpsAmo: '123456789-1234',
                  td_rfnAmo: '',
                  td_rcpIst: '',
                  td_dpsAcc: '115,200',
                  td_etc: '',
              },
          ],

          selectOption8: [                
              { label: '현금', value: 'default' },
              { label: '카드', value: 'opt1' },
          ],

          tblHeadList: [
              {
                  dpsDate: '입금날짜',
                  depositor: '입금자',
                  dpsAmo: '입금액',
                  rfnAmo: '환불액',
                  dpsform: '입금방법',
                  rcpIst: '수납사원',
              },
          ],

          tblBodyList: [
              {
                  dpsDate: '2023-03-29',
                  depositor: '고객',
                  dpsAmo: '115,200',
                  rfnAmo: '0',
                  dpsform: '신용카드',
                  rcpIst: 'mklim',
              },
          ],

          // 예약불가경고
          // popUnavaild: false,

          popTit2: '예약불가경고(예/계약 접수자료)',

          tblList03: [
              {
                  carType: '차종',
                  rsvPeriod: '예약기간',

                  td_carType: 'MAZDA2',
              },
          ],

          isNoQuant: false,

          tblHeadList02: [
              {
                  date: '날짜',
                  quantity: '보유수량',
                  remQuant: '잔여수량',
              },
          ],

          tblBodyList02: [
              {
                  date: '2023-03-29',
                  quantity: '3',
                  remQuant: '0',
                  isNoQuant: true,
              },
              {
                  date: '2023-05-06',
                  quantity: '3',
                  remQuant: '1',
              },
              {
                  date: '2023-05-07',
                  quantity: '3',
                  remQuant: '0',
                  isNoQuant: true,
              },
          ],

          selectOption9: [                
              { label: '1', value: 'default' },
              { label: '2', value: 'opt1' },
              { label: '3', value: 'opt2' },
              { label: '4', value: 'opt3' },
          ],

          popRsvCarAvail: false,

          popTit3: '예약가능 차종검색',
          
          tblHeadList03: [
              {
                  carName: '차종명',
                  carNop: '가능대수',
                  carApply: '적용',
              },
          ],

          tblBodyList03: [
              {
                  carName: '차종명1',
                  carNop: '0',
                  isNoQuant: true,
              },
              {
                  carName: '차종명2',
                  carNop: '3',
              },
          ],
      }
  },
  
  methods: {
    closePopup() {        
        this.popDimmed = false;
        this.popDeposit = false;
        this.popRsvCarAvail = false;
        document.body.classList.remove("scrollLock"); // 팝업 닫을 시
    },
    dpsMngOpen(){
        this.popDimmed = true;
        this.popDeposit = true;
        document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
    },
    rsvCarAvailOpen() {
        this.popDimmed = true;
        this.popRsvCarAvail = true;
        document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
    },
  },
}
</script>

<style scoped>
.tbl_x_scr{width:150%;}
</style>
