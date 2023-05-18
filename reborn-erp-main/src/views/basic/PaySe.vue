<template>
    <div class="subBody basicdata02">
        <h2>{{ contTit }}</h2>

        <div class="data-wrap">

            <div class="data-table-wrap tblScroll">
                <table class="data-table-ty01">
                    <thead>
                        <tr v-for="(tblData, i) in tblDataHeadList" :key="i">
                            <th class="mo_hide">{{ tblData.code }}</th>
                            <th>{{ tblData.deposit }}</th>
                            <th>{{ tblData.dpsform }}</th>
                            <th class="mo_hide">{{ tblData.etc }}</th>
                            <th>{{ tblData.use }}</th>
                            <th class="mo_hide">{{ tblData.date }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="i" v-for="(tblData, i) in tblDataBodyList">
                            <td class="mo_hide">{{ tblData.code }}</td>
                            <td>{{ tblData.deposit }}</td>
                            <td>{{ tblData.dpsform }}</td>
                            <td class="mo_hide">{{ tblData.etc }}</td>
                            <td :class="{ notUse: tblData.isNotuse }">{{ tblData.use }}</td>
                            <td class="mo_hide">{{ tblData.date }}</td>
                        </tr>
                        <tr>
                            <td colspan="8" class="none-data">{{ NodataText }}</td>
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
                    <button class="btn cbtn btn_bg01" @click="openPopPay()">입금수단 등록</button>
                </div>
            </div>
        </div> <!-- // data-wrap -->
    </div><!-- //subBody -->
    
<!-----
팝업     
---->

    <div class="dimmed" v-show="popDimmed"></div>

    <!-- popup : 입금수단 조회 및 수정 -->
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
                <tbody :key="i" v-for="(tblItem, i) in tblList">
                    <tr>
                        <th>{{ tblItem.code }}</th>
                        <td>
                           <input type="text" v-model="td_code" readonly />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblItem.deposit }}<span class="ico_essential"></span></th>
                        <td>
                            <input type="text" v-model="td_deposit" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblItem.dpsform }}<span class="ico_essential"></span></th>
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
                        <th>{{ tblItem.etc }}</th>
                        <td>
                            <input type="text" v-model="td_etc" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblItem.use }}<span class="ico_essential"></span></th>
                        <td>
                            <div class="frm-wrap radio">
                                <div class="frm" v-for="(rdoItem, index) in rdoItems2" :key="index">
                                    <input type="radio" :id="'rdo2_' +index" name="rdo02" :checked="rdoItem.checked" />
                                    <label :for="'rdo2_' + index">{{ rdoItem.label }}</label>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblItem.date }}</th>
                        <td>
                            <input type="text" v-model="td_date" readonly />
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

    <!-- popup : 입금수단 수정 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>해당 입금수단을 수정 하시겠습니까?</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->

    <!-- popup : 입금수단 수정 완료 -->
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

    <!-- popup : 입금수단 등록 -->
    <Popup ref="popup" class="medium" v-show="PopPay" @close="closePopup()">
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
                <tbody :key="i" v-for="(tblItem, i) in tblList02">
                    <tr>
                        <th>{{ tblItem.deposit }}<span class="ico_essential"></span></th>
                        <td>
                            <input type="text" v-model="tblItem.td_deposit" placeholder="입금 방법을 입력하세요." />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblItem.dpsform }}<span class="ico_essential"></span></th>
                        <td>                            
                            <div class="frm-wrap radio">
                                <div class="frm" v-for="(rdoItem, index) in rdoItems1" :key="index">
                                    <input type="radio" :id="'rdo3_' +index" name="rdo01" :checked="rdoItem.checked" />
                                    <label :for="'rdo3_' + index">{{ rdoItem.label }}</label>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblItem.etc }}</th>
                        <td>
                            <input type="text" v-model="tblItem.td_etc" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ tblItem.use }}<span class="ico_essential"></span></th>
                        <td>
                            <div class="frm-wrap radio">
                                <div class="frm" v-for="(rdoItem, index) in rdoItems2" :key="index">
                                    <input type="radio" :id="'rdo4_' +index" name="rdo02" :checked="rdoItem.checked" />
                                    <label :for="'rdo4_' + index">{{ rdoItem.label }}</label>
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

    <!-- popup : 배차장소 등록 확인 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>해당 입금수단을 등록 하시겠습니까?</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
                <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->

    <!-- popup : 배차장소 등록 완료 -->
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
    <Popup ref="popup" class="medium" v-show="popExposure" @close="closePopup()">
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
import Select from '../../components/layout/Select.vue'
import Popup from '../../components/layout/Popup.vue'
import Pagination from '../../components/layout/Pagination.vue'
import DragList from '../../components/layout/DragList.vue'

export default {
    name: 'PaySe',
    components: {
        Select,
        Popup,
        Pagination,
        DragList,
    },
    data() {
        return {
            contTit: '입금수단',

            isNotuse: false,
            
            // table head data
            tblDataHeadList: [
                {
                    code: '입금수단 코드',
                    deposit: '입금수단',
                    dpsform: '입금형태',
                    etc: '비고',
                    use: '사용여부',
                    date: '등록/수정일자',
                }
            ],

            // table body data
            tblDataBodyList: [
                {
                    code: '06',
                    deposit: '삼성카드',
                    dpsform: '카드',
                    etc: '',
                    use: '사용안함',
                    date: '2023-04-01 15:26',
                    isNotuse: true,
                },
                {
                    code: '05',
                    deposit: '신한카드',
                    dpsform: '카드',
                    etc: '',
                    use: '사용',
                    date: '2023-04-01 15:26',
                },
            ],

            NodataText: '표시할 데이터가 없습니다.',
            
            // 페이징
            page: {
                totalCount: 1,
                totalPages: 2,
                page: 0,
                size: 5,
            },

            //popup
            popDimmed: false,

            // 입금수단 조회 및 수정
            popTit1: '입금수단 조회 및 수정',            
            tblList: [
                {
                    code: '입금수단 코드',
                    deposit: '입금수단',
                    dpsform: '입금형태',
                    etc: '비고',
                    use: '사용여부',
                    date: '등록/수정 일자',
                },
            ],
            td_code: '05',
            td_deposit: '현대카드',
            td_etc: '',
            td_date: '2023-04-01 15:26',


            checked: false,
            rdoItems1: [
                { id: 1, label:'현금' },
                { id: 2, label:'카드', checked: true },
                { id: 3, label:'기타(온라인)' },
                { id: 4, label:'실제 입금행위는 아님' },
            ],
            rdoItems2: [
                { id: 1, label:'사용', checked: true },
                { id: 2, label:'사용안함' },
            ],

            PopPay: false,
            
            // 입금수단 등록
            popTit2: '입금수단 등록',           
            tblList02: [
                {
                    deposit: '입금수단',
                    dpsform: '입금형태',
                    etc: '비고',
                    use: '사용여부',

                    td_deposit: '',
                    td_etc: '',
                },
            ],

            popExposure: false, 
            
            // 팝업 drag list
            // 노출순서 관리
            popTit3: '노출순서 관리',
            itemTit: '입금수단',
            dragList01: [
                { id: 1, label: '삼성카드' },
                { id: 2, label: '현대카드' },
                { id: 3, label: '비씨카드' },
                { id: 4, label: '온라인' },
                { id: 5, label: '현금' },
            ],

        }
    },
    methods: {
        closePopup() {
            this.popDimmed = false;
            this.PopPay = false;
            this.popExposure = false;
            document.body.classList.remove("scrollLock"); // 팝업 닫을 시
        },
        openPopExp() {
            this.popDimmed = true;
            this.popExposure = true;
            document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
        },
        openPopPay() {
            this.popDimmed = true;
            this.PopPay = true;
            document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
        },
    },
}
</script>

<style scoped></style>
