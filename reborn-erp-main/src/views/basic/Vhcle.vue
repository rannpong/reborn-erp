<template>
    <div class="subBody basicdata02">
        <h2>{{ contTit }}</h2>

        <div class="data-wrap">
            <div class="tbl-tit-wrap">
                <div class="flex-wrap">
                    <div class="btn-wrap">
                        <button class="btn tbtn btn_bg04 icoBtn icoExcel">엑셀다운로드</button>
                    </div>
                </div>
            </div>

            <div class="data-table-wrap tblScroll">
                <table class="data-table-ty01">
                    <thead>
                        <tr v-for="(tblData, i) in tblDataHeadList" :key="i">
                            <th>{{ tblData.carCode }}</th>
                            <th>{{ tblData.carType }}</th>
                            <th class="mo_hide">{{ tblData.etc }}</th>
                            <th>{{ tblData.carUse }}</th>
                            <th class="mo_hide">{{ tblData.carDate }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="i" v-for="(tblData, i) in tblDataBodyList">
                            <td>{{ tblData.carCode }}</td>
                            <td>{{ tblData.carType }}</td>
                            <td class="mo_hide">{{ tblData.etc }}</td>
                            <td :class="{ notUse: tblData.isNotuse }">{{ tblData.carUse }}</td>
                            <td class="mo_hide">{{ tblData.carDate }}</td>
                        </tr>
                        <tr>
                            <td colspan="6" class="none-data">{{ NodataText }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="tbl-bot-wrap">                
                <!-- paging -->
                <Pagination :currentPage="this.page.page" :totalPages="this.page.totalPages" :pageChange="this.onPageChange" />
                <!-- //paging -->
                <div class="btn-wrap">
                    <button class="btn cbtn btn_bg04" @click="openPopExp()">노출순서 관리</button>
                    <button class="btn cbtn btn_bg01" @click="openPopReg()">차종 등록</button>
                </div>
            </div>
        </div> <!-- // data-wrap -->
    </div><!-- //subBody -->

<!-----
팝업     
---->

    <!-- popup : 차종분류 조회 및 수정 -->
    <!-- <Popup ref="popup" class="medium" @close="closePopup()">
        <template #popupHead>
            <h2>{{ popTit1 }}</h2>
        </template>
        <template #popupBody>
            <table class="data-table-ty04">
                <caption>{{ popTit1 }}</caption>
                <colgroup>
                    <col style="width:30%">
                    <col style="">
                </colgroup>
                <tbody :key="i" v-for="(tblCarClosed, i) in tblCarClassList">
                    <tr>
                        <th>{{ tblCarClosed.carCode }}<span class="ico_essential"></span></th>
                        <td>
                            <input type="text" v-model="td_carCode" readonly />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblCarClosed.carType }}<span class="ico_essential"></span></th>
                        <td>
                            <input type="text" v-model="td_carType" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblCarClosed.etc }}</th>
                        <td>
                            <input type="text" v-model="td_etc" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblCarClosed.carUse }}<span class="ico_essential"></span></th>
                        <td>
                            <div class="frm-wrap radio">
                                <div class="frm" v-for="(rdoItem, index) in rdoItems1" :key="index">
                                    <input type="radio" :id="'rdo1_' +index" name="rdo01" :checked="rdoItem.checked" />
                                    <label :for="'rdo1_' + index">{{ rdoItem.label }}</label>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblCarClosed.carDate }}</th>
                        <td>
                            <input type="text" v-model="td_carDate" readonly />
                        </td>
                    </tr>
                </tbody>
            </table>            
            <span class="guide_desc">필수 입력 항목(*)은 모두 입력해야 합니다.</span>
        </template>
        <template #popupBtn>
            <div class="btn-wrap">
                <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
                <button class="btn cbtn btn_bg01">수정</button>
            </div>
        </template>
    </Popup> -->
    <!-- // popup -->
    
    <!-- popup : 차종 수정 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>해당 차종을 수정 하시겠습니까?</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->

    <!-- popup : 차종 수정 완료 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>수정하였습니다.</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->

    <!-- popup : 차종분류 등록 -->
    <Popup ref="popup" class="medium" v-show="PopcarRegis" @close="closePopup()">
        <template #popupHead>
            <h2>{{ popTit2 }}</h2>
        </template>
        <template #popupBody>
            <table class="data-table-ty04">
                <caption>{{ popTit2 }}</caption>
                <colgroup>
                    <col style="width:30%">
                    <col style="">
                </colgroup>
                <tbody :key="i" v-for="(tblCarClosed, i) in tblCarClassList">
                    <tr>
                        <th>{{ tblCarClosed.carType }}<span class="ico_essential"></span></th>
                        <td>
                            <input type="text" v-model="td_carType" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblCarClosed.etc }}</th>
                        <td>
                            <input type="text" v-model="td_etc" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblCarClosed.carUse }}<span class="ico_essential"></span></th>
                        <td>
                            <div class="frm-wrap radio">
                                <div class="frm" v-for="(rdoItem, index) in rdoItems1" :key="index">
                                    <input type="radio" :id="'rdo2_' +index" name="rdo02" :checked="rdoItem.checked" />
                                    <label :for="'rdo2_' + index">{{ rdoItem.label }}</label>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <span class="guide_desc">필수 입력 항목(*)은 모두 입력해야 합니다.</span>
        </template>
        <template #popupBtn>
            <div class="btn-wrap">
                <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
                <button class="btn cbtn btn_bg01">등록</button>
            </div>
        </template>
    </Popup>
    <!-- // popup -->

    <!-- popup : 차종 등록 확인 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>해당 차종을 등록 하시겠습니까?</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
                <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->

    <!-- popup : 차종 등록 완료 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>등록하였습니다.</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->

    <!-- popup : 노출순서 관리 -->
    <Popup ref="popup" class="medium" v-show="popCarExposure" @close="closePopup()">
        <template #popupHead>
            <h2>{{ popTit3 }}</h2>
        </template>
        <template #popupBody>
            <p>드래그하여 노출순서를 변경하실 수 있습니다.</p>
            <div class="tblScroll">
                <div class="drag_list_wrap">
                    <h3 class="drag_tit">{{ itemTit }}</h3>          
                    <DragList :list="dragList01" name="dragList01"></DragList>
                </div>
            </div>
        </template>
        <template #popupBtn>
            <div class="btn-wrap">
                <button class="btn cbtn btn_bg04" @click="closePopup()">닫기</button>
                <button class="btn cbtn btn_bg01">노출순서 저장</button>
            </div>
        </template>
    </Popup>
    <!-- // popup -->

    <!-- popup : 노출순서 변경 확인 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>노출순서를 변경 하시겠습니까?</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
                <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->

    <!-- popup : 노출순서 변경 완료 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>변경되었습니다.</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->

</template>

<script lang="ts">
import Popup from '../../components/layout/Popup.vue'
import Pagination from '../../components/layout/Pagination.vue'
import DragList from '../../components/layout/DragList.vue'

export default {
    name: 'Vhcle',
    components: {
        Popup,
        Pagination,
        DragList,
    },
    data() {
        return {
            contTit: '차종분류',

            tblDataHeadList: [
                {
                    carCode: '차종분류 코드',
                    carType: '차종분류 명',
                    etc: '비고',
                    carUse: '사용여부',
                    carDate: '등록/수정일자',
                },
            ],
            tblDataBodyList: [
                {
                    carCode: '100',
                    carType: '경형',
                    etc: '',
                    carUse: '사용',
                    carDate: '2023-04-01 15:26',
                }, 
                {
                    carCode: '200',
                    carType: '소형',
                    etc: '',
                    carUse: '사용안함',
                    carDate: '2023-04-01 15:26',
                    isNotuse: true,
                },
            ],

            isNotuse: false,

            // 페이징
            page: {
                totalCount: 1,
                totalPages: 2,
                page: 0,
                size: 5,
            },

            NodataText: '표시할 데이터가 없습니다.',

            //popup 차종분류 조회 및 수정
            popTit1: '차종분류 조회 및 수정',

            tblCarClassList: [
                {
                    carCode: '차종분류 코드',
                    carType: '차종분류 명',
                    etc: '비고',
                    carUse: '사용여부',
                    carDate: '등록/수정 일자',
                },
            ],

            checked: false,
            rdoItems1: [                
                { id: 1, label:'사용', checked:true },
                { id: 2, label:'사용안함' },
            ],

            td_carCode: '100',
            td_carType: '경형',
            td_etc: '',
            td_carDate: '2023-04-01  15:26',

            popDimmed: false,

            PopcarRegis: false,
            popCarExposure: false,

            popTit2: '차종분류 등록',

            popTit3: '노출순서 관리',

            // 팝업 drag list
            itemTit: '등록차종',
            // drag list
            dragList01: [
                { id: 1, label: '경형' },
                { id: 2, label: '소형' },
                { id: 3, label: '중형' },
                { id: 4, label: '대형' },
                { id: 5, label: 'SUV' },
            ],

        }
    },
    methods: {
        closePopup() {
            this.PopcarRegis = false;
            this.popCarExposure = false;
            document.body.classList.remove("scrollLock"); // 팝업 닫을 시
        },
        openPopReg() {
            this.PopcarRegis = true;
            document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
        },
        openPopExp() {
            this.popCarExposure = true;
            document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
        }
    },
}
</script>

<style scoped></style>
