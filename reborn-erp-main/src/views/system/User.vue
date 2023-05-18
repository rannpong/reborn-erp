<template>
    <div class="subBody corpstup03">
        <h2>{{ contTit }}</h2>

        <form action="">
            <div class="searchBox">
                <div class="searchArea">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="flex-wrap">
                                        <Select :options="selectOption1" name="selectOption1" id="selectOption1" :default="'전체'" />
                                        <input type="text" class="searchInput" placeholder="검색어를 입력하세요." v-model="searchInput" />
                                        <div class="frm-wrap chk_del">
                                            <div class="frm">
                                                <input type="checkbox" id="chkdel" />
                                                <label for="chkdel">미사용 계정 제외</label>
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
                    <div class="flex-wrap">                        
                        <div class="btn-wrap align_right">
                            <button class="btn cbtn btn_bg01">신규 등록</button>
                        </div>
                    </div>
                </div>
                
                <div class="data-table-wrap tblScroll">
                    <table class="data-table-ty01">
                        <thead>
                            <tr v-for="(tblData, i) in tblDataHeadList" :key="i">
                                <th>{{ tblData.id }}</th>
                                <th>{{ tblData.name }}</th>
                                <th class="mo_hide">{{ tblData.worker }}</th>
                                <th class="mo_hide">{{ tblData.phone }}</th>
                                <th class="mo_hide">{{ tblData.email }}</th>
                                <th>{{ tblData.use }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr :key="i" v-for="(tblData, i) in tblDataBodyList">
                                <td>{{ tblData.id }}</td>
                                <td>{{ tblData.name }}</td>
                                <td class="mo_hide">{{ tblData.worker }}</td>
                                <td class="mo_hide">{{ tblData.phone }}</td>
                                <td class="mo_hide">{{ tblData.email }}</td>
                                <td :class="{ notUse: tblData.isNotuse }">{{ tblData.use }}</td>
                            </tr>
                            <tr>
                                <td colspan="6" class="none-data">{{ NodataText }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- // table-wrap -->

                <div class="tbl-bot-wrap">
                    <div class="btn-wrap">
                        <button class="btn cbtn btn_bg01">신규 등록</button>
                    </div>
                </div>
            </div>
            <!-- // data-wrap -->
        </form>
    </div><!-- // subBody -->
</template>

<script lang="ts">
import Select from '../../components/layout/Select.vue';

export default {
    name: 'User',
    components: {
        Select,
    },
    data() {
        return {
            contTit: '사용자관리',

            // searchbox select01
            selectOption1: [
                { label: '전체', value: 'default' },
                { label: '아이디', value: 'opt1' },
                { label: '작업자명', value: 'opt2' },
                { label: '전화번호', value: 'opt3' },
                { label: '이메일', value: 'opt4' },
            ],

            searchInput: '',

            
            isNotuse: false,
            
            tblDataHeadList: [
                {
                    id: '작업자 아이디',
                    name: '작업자 명',
                    worker: '작업자 구분',
                    phone: '전화번호',
                    email: '이메일',
                    use: '사용여부',
                },
            ],
            tblDataBodyList: [
                {
                    id: 'kdhong',
                    name: '홍길동',
                    worker: '직원',
                    phone: '01012345678',
                    email: 'kdhong@bluewaves.co.kr',
                    use: '사용',
                },
                {
                    id: 'mklim',
                    name: '임명균',
                    worker: '관리자',
                    phone: '01098765432',
                    email: 'mklim@bluewaves.co.kr',
                    use: '사용안함',
                    isNotuse: true,
                },
            ],

            NodataText: '표시할 데이터가 없습니다.',

        }
    },
    methods: {},
    }
</script>

<style scoped></style>
