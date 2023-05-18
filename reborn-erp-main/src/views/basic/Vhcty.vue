<template>
    <div class="subBody basicdata01">
        <h2>{{ contTit }}</h2>

        <div class="searchBox">
            <div class="searchArea">
                <table>
                    <colgroup>
                        <col style="">
                    </colgroup>
                    <tbody>
                        <tr>
                            <td>
                                <div class="flex-wrap">
                                    <Select :options="selectOption1" name="selectOption1" id="selectOption1" :default="'차종분류'" />
                                    <Select :options="selectOption2" name="selectOption2" id="selectOption2" :default="'차종'" />
                                    <div class="input-wrap carNumInput">
                                        <input type="text" placeholder="차량번호를 입력하세요." />
                                    </div>
                                    <div class="frm-wrap chk_del">
                                        <div class="frm">
                                            <input type="checkbox" id="chkdel" />
                                            <label for="chkdel">삭제차량 포함</label>
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
            <div class="tbl-tit-wrap">
                <div class="total-wrap">
                    <span>검색결과: 총 <em class="total">3,654</em>건</span>
                </div>
                <div class="flex-wrap">
                    <Select :options="selectSorting" name="selectSorting" id="selectSorting" class="sortingSelect" :default="'20'" />
                    <div class="btn-wrap">
                        <button class="btn tbtn btn_bg04 icoBtn icoExcel">엑셀다운로드</button>
                    </div>
                </div>
            </div>

            <div class="data-table-wrap tblScroll">
                <table class="data-table-ty01">
                    <thead>
                        <tr v-for="(tblData, i) in tblDataHeadList" :key="i">
                        <th>{{ tblData.sortNum }}<button class="btn-desc"></button></th>
                        <th>{{ tblData.carNum }}<button class="btn-desc"></button></th>
                        <th>{{ tblData.carType }}<button class="btn-desc up"></button></th>
                        <th>{{ tblData.carClass }}<button class="btn-desc"></button></th>
                        <th>{{ tblData.carOpen }}<button class="btn-desc"></button></th>
                        <th>{{ tblData.carRegis }}<button class="btn-desc"></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="i" v-for="(tblData, i) in tblDataBodyList" :class="{ delete_line: tblData.isDelete }">
                            <td>{{ tblData.sortNum }}</td>
                            <td>{{ tblData.carNum }}</td>
                            <td>{{ tblData.carType }}</td>
                            <td>{{ tblData.carClass }}</td>
                            <td>
                                <div class="toggleBtn">
                                    <input type="checkbox" id="tglbtn1" /><!-- 비활성화시 disabled 추가 -->
                                    <label for="tglbtn1"><span></span></label>
                                </div>
                            </td>
                            <td>{{ tblData.carRegis }}</td>
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
                    <button class="btn cbtn btn_bg04" @click="openPopup()">차종별 보유현황</button>
                    <button class="btn cbtn btn_bg01">차량 등록</button>
                </div>
            </div>
        </div> <!-- // data-wrap -->
    </div><!-- //subBody -->


    <!-----
    팝업     
    ---->

    <div class="dimmed" v-show="popDimmed"></div>

    <!-- popup : 텍스트만 들어가는 기본 팝업 -data 사용할 경우 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()"> // 기본- width 700, small- width 460, medium- width 560, large- width 980 사이즈에 따라서 class 추가
      <template #popupBody>
        <p>{{ text }}</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->
    
    <!-- popup : 비노출 변경확인 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>해당 차량을 비 노출로 변경하였습니다.</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->

    <!-- popup 비노출 클릭시 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>
            해당 차량을 비 노출시키겠습니까?<br/>
            비 노출 선택 시 해당차량은 예약에서 조회되지 않습니다.
        </p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg04" @click="closePopup()">취소</button>
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->
    
    <!-- popup : 삭제된 차량 노출 불가 -->
    <!-- <Popup ref="popup" class="small" @close="closePopup()">
      <template #popupBody>
        <p>삭제된 차량은 노출 시킬 수 없습니다.</p>
      </template>
      <template #popupBtn>
        <div class="btn-wrap">
            <button class="btn cbtn btn_bg01">확인</button>
        </div>
      </template>
    </Popup> -->
    <!-- // popup -->

    <!-- popup : 차량별 보유현황 -->
    <Popup ref="popup" class="medium" v-show="popCarStatus" @close="closePopup()">
        <template #popupHead>
            <h2>{{ popTit1 }}</h2>
        </template>
        <template #popupBody>
            <p>차종을 드래그하여 노출순서를 변경하실 수 있습니다.</p>
            <div class="tblScroll dragTbl">
                <table class="data-table-ty02">
                    <caption>{{ popTit1 }}</caption>
                    <colgroup>
                        <col style="">
                        <col style="width:30%">
                    </colgroup>
                    <thead>
                        <tr :key="i" v-for="(tblIndex, i) in carStatusHead">
                            <th>{{ tblIndex.carType }}</th>
                            <th>{{ tblIndex.carCount }}</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td>합계</td>
                            <td>{{ carStatusTotal }}</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td colspan="2">
                                <DragList :list="dragList01" name="dragList01"></DragList>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
    
</template>

<script lang="ts">
import Select from '../../components/layout/Select.vue'
import Pagination from '../../components/layout/Pagination.vue'
import Popup from '../../components/layout/Popup.vue'
import DragList from '../../components/layout/DragList.vue'

export default {
    name: 'Vhcty',
    components: {
        Select,
        Pagination,
        Popup,
        DragList,
    },
    data() {
        return {
            contTit:'차량관리',
            
            // 차종분류
            selectOption1: [
                { label: '리스트01', value: 'default' },
                { label: '리스트02', value: 'opt1' },
                { label: '리스트03', value: 'opt2' },
                { label: '리스트04', value: 'opt3' },
            ],
            //차종
            selectOption2: [
                { label: '리스트01', value: 'default' },
                { label: '리스트02', value: 'opt1' },
                { label: '리스트03', value: 'opt2' },
                { label: '리스트04', value: 'opt3' },
            ],

            // sorting 갯수
            selectSorting: [                
                { label: '20', value: 'default' },
                { label: '50', value: 'opt1' },
                { label: '100', value: 'opt2' },
                { label: '200', value: 'opt3' },
            ],
            
            // 페이징
            page: {
                totalCount: 1,
                totalPages: 5,
                page: 0,
                size: 5,
            },

            // table head data
            tblDataHeadList: [
                {
                    sortNum: 'No',
                    carNum: '차량번호',
                    carType: '차종',
                    carClass: '차종분류',
                    carOpen: '차량 노출여부',
                    carRegis: '등록일시',
                }
            ],

            isDelete: false,

            // table body data
            tblDataBodyList: [
                {
                    sortNum: '4',
                    carNum: '京部500あ 46-49',
                    carType: 'TOYOTA YARiS',
                    carClass: '소형',
                    carOpen: '',
                    carRegis: '2023-03-10 16:41:15',
                },
                {
                    sortNum: '3',
                    carNum: '京部500あ 46-49',
                    carType: 'TOYOTA YARiS',
                    carClass: '소형',
                    carOpen: '',
                    carRegis: '2023-03-10 16:41:15',
                    isDelete: true,
                },
                {
                    sortNum: '2',
                    carNum: '京部500あ 46-49',
                    carType: 'TOYOTA YARiS',
                    carClass: '소형',
                    carOpen: '',
                    carRegis: '2023-03-10 16:41:15',
                },
                {
                    sortNum: '1',
                    carNum: '京部500あ 46-49',
                    carType: 'TOYOTA YARiS',
                    carClass: '소형',
                    carOpen: '',
                    carRegis: '2023-03-10 16:41:15',
                },
            ],

            NodataText: '표시할 데이터가 없습니다.',

            //데이터없음 바인딩
            haveData: true,
            noneData: false,
            htmlString: '데이터가 없어용',

            
            popDimmed: false,

            popCarStatus: false,
            popTit1: '차종 별 보유 현황',
            carStatusHead: [
                {
                    carType: '보유 차종',
                    carCount: '대수'
                }
            ],
            carStatusBody: [
                {
                    carType: 'TOYOTA YARiS',
                    carCount: '3'
                },
                {
                    carType: 'MAZDA2',
                    carCount: '1'
                },
                {
                    carType: 'Corolla Axio',
                    carCount: '1'
                },
                {
                    carType: 'Premio 1.8',
                    carCount: '1'
                },
                {
                    carType: 'Premio 1.8',
                    carCount: '1'
                }
            ],
            
            carStatusTotal: '6',

            // 팝업 drag list
            dragList01: [
                {
                    id: 1,
                    label: '토요타',
                    count: '5',
                },
                {
                    id: 2,
                    label: 'MAZDA2',
                    count: '2',
                },
                {
                    id: 3,
                    label: 'Premio',
                    count: '1',
                },
            ],

        }
    },
    methods: {
        closePopup() {
            this.popDimmed = false;
            this.popCarStatus = false;
            document.body.classList.remove("scrollLock"); // 팝업 닫을 시
        },
        openPopup() {
            this.popDimmed = true;
            this.popCarStatus = true;
            document.body.classList.add("scrollLock"); // 팝업 오픈 시 body 스크롤 막기
        }
    },
}
</script>

<style scoped>
.popup.medium .scroll_box{
    max-height:292px;
}
</style>
