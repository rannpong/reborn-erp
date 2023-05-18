<template>
  <div class="guide-wrap">
    <h2>GUIDE</h2>
    <div class="guide-box">
      <div class="guide-area">
        <!-- input -->
        <!-- v-model="" 추가 해야함 -->
        <h3>placeholder</h3>
        <div class="input-wrap">
          <input type="text" placeholder="placeholder" />
          <!-- 에러시 class="error" 추가 -->
          <ul class="errMsg">
            <!-- 활성화시 class="errShow" 추가 -->
            <li>비밀번호가 일치하지 않습니다.</li>
          </ul>
        </div>

        <br />

        <h3>value</h3>
        <div class="input-wrap">
          <input type="text" v-model="value" />
          <!-- 에러시 class="error" 추가 -->
          <ul class="errMsg">
            <!-- 활성화시 class="errShow" 추가 -->
            <li>비밀번호가 일치하지 않습니다.</li>
          </ul>
        </div>

        <br />

        <h3>readonly</h3>
        <div class="input-wrap">
          <input type="text" v-model="value" readonly />
          <!-- 에러시 class="error" 추가 -->
          <ul class="errMsg">
            <!-- 활성화시 class="errShow" 추가 -->
            <li>비밀번호가 일치하지 않습니다.</li>
          </ul>
        </div>

        <br />

        <h3>disabled</h3>
        <div class="input-wrap">
          <input type="text" v-model="value" disabled />
          <!-- 에러시 class="error" 추가 -->
          <ul class="errMsg">
            <!-- 활성화시 class="errShow" 추가 -->
            <li>비밀번호가 일치하지 않습니다.</li>
          </ul>
        </div>

        <br />

        <h3>text error</h3>
        <div class="input-wrap">
          <input type="text" v-model="value" class="error" />
          <!-- 에러시 class="error" 추가 -->
          <ul class="errMsg errShow">
            <!-- 활성화시 class="errShow" 추가 -->
            <li>비밀번호가 일치하지 않습니다.</li>
          </ul>
        </div>

        <br />

        <h3>password</h3>
        <div class="input-wrap">
          <input type="password" v-model="value" />
          <!-- 에러시 class="error" 추가 -->
          <ul class="errMsg">
            <!-- 활성화시 class="errShow" 추가 -->
            <li>비밀번호가 일치하지 않습니다.</li>
          </ul>
        </div>

        <br />

        <h3>password error</h3>
        <div class="input-wrap">
          <input type="password" v-model="value" class="error" />
          <!-- 에러시 class="error" 추가 -->
          <ul class="errMsg errShow">
            <!-- 활성화시 class="errShow" 추가 -->
            <li>비밀번호가 일치하지 않습니다.</li>
          </ul>
        </div>

        <br />

        <h3>number</h3>
        <div class="input-wrap">
          <input type="number" v-model="number" />
          <!-- 에러시 class="error" 추가 -->
          <ul class="errMsg errShow">
            <!-- 활성화시 class="errShow" 추가 -->
            <li>비밀번호가 일치하지 않습니다.</li>
          </ul>
        </div>

        <br />

        <h3>tel</h3>
        <div class="input-wrap">
          <input type="tel" v-model="tel" />
          <!-- 에러시 class="error" 추가 -->
          <ul class="errMsg errShow">
            <!-- 활성화시 class="errShow" 추가 -->
            <li>비밀번호가 일치하지 않습니다.</li>
          </ul>
        </div>

        <br />

        <h3>휴차</h3>
        <div class="input-wrap">
          <input type="tel" v-model="closed" class="closed" />
        </div>

        <br />

        <h3>삭제차량</h3>
        <div class="input-wrap">
          <input type="tel" v-model="delete" class="delete" />
        </div>

        <br />

        <h3>삭제차량 readonly</h3>
        <div class="input-wrap">
          <input type="tel" v-model="delete" class="delete" readonly />
        </div>
        <!-- // input -->

        <br />
      </div>
      <div class="guide-area">
        <!-- textarea -->
        <h3>textarea placeholder</h3>
        <textarea placeholder="placeholder"></textarea>

        <br />

        <h3>textarea value</h3>
        <textarea placeholder="" value="value"></textarea>

        <br />

        <h3>textarea readonly</h3>
        <textarea placeholder="" value="value" readonly></textarea>
        <!-- // textarea -->

        <br />

        <!-- 체크박스 -->
        <h3>체크박스</h3>
        <div class="frm-wrap check">
          <div class="frm" v-for="(chkItem, index) in chkItems" :key="index">
            <input type="checkbox" :id="'chk1_' + index" name="chk01" />
            <label :for="'chk1_' + index">{{ chkItem.label }}</label>
          </div>
        </div>

        <br />

        <h3>체크박스 disabled</h3>
        <div class="frm-wrap check">
          <div class="frm" v-for="(chkItem, index) in chkItems" :key="index">
            <input
              type="checkbox"
              :id="'chk2_' + index"
              name="chk02"
              disabled
            />
            <label :for="'chk2_' + index">{{ chkItem.label }}</label>
          </div>
        </div>
        <!-- // 체크박스 -->

        <br />

        <!-- 체크박스 : 삭제조회전용 -->
        <h3>체크박스 : 삭제조회전용</h3>
        <div class="frm-wrap chk_del">
          <div class="frm">
            <input type="checkbox" id="chkdel" />
            <label for="chkdel">삭제조회전용</label>
          </div>
        </div>
        <!-- // 체크박스 -->

        <br />

        <!-- 라디오 -->
        <h3>라디오</h3>
        <div class="frm-wrap radio">
          <div class="frm" v-for="(rdoItem, index) in rdoItems" :key="index">
            <input type="radio" :id="'rdo1_' + index" name="rdo01" />
            <label :for="'rdo1_' + index">{{ rdoItem.label }}</label>
          </div>
        </div>

        <br />

        <h3>라디오 disabled</h3>
        <div class="frm-wrap radio">
          <div class="frm" v-for="(rdoItem, index) in rdoItems" :key="index">
            <input type="radio" :id="'rdo1' + index" name="rdo01" disabled />
            <label :for="'rdo2_' + index">{{ rdoItem.label }}</label>
          </div>
        </div>
        <!-- // 라디오 -->
      </div>
    </div>
    <div class="guide-area t_center">
      <h3>페이징</h3>
      <!-- // Pagination -->
      <Pagination
        :currentPage="this.page.page"
        :totalPages="this.page.totalPages"
        :pageChange="this.onPageChange"
      />
      <!-- // Pagination -->

      <br />

      <!-- select -->

      <h3>셀렉트</h3>
      <Select
        :options="selectOption1"
        name="selectOption1"
        id="selectOption1"
        :default="'이름'"
      />

      <br />

      <h3>셀렉트 disabled (class="disabled" 추가)</h3>
      <Select
        :options="selectOption1"
        name="selectOption1"
        id="selectOption1"
        :default="'이름'"
        class="disabled"
      />
      <!-- disabled 시 class="disabled" 추가 -->
      <!-- // select -->

      <br />

      <h3>toggle btn</h3>
      <div class="toggleBtn">
        <input type="checkbox" id="tglbtn" />
        <label for="tglbtn"><span></span></label>
      </div>

      <br />

      <h3>toggle btn disabled</h3>
      <div class="toggleBtn">
        <input type="checkbox" id="tglbtn2" disabled />
        <label for="tglbtn2"><span></span></label>
      </div>

      <br />

      <h3>button</h3>
      <p>
        min-width 값으로 최소값만 주고 텍스트 길이가 긴 값은 유동적으로 늘어나게
        함
        <br />
        높이값에 따라 버튼 사이즈 및 버튼 컬러 class 추가
        <br />
        <br />
        cbtn : 80*36 radius:4px -> 콘텐츠 btn
        <br />
        sbtn : 80*34 radius:3px -> search btn / REborn ERP 계정 생성
        <br />
        tbtn : 60*34 radius:3px -> table btn
        <br />
        <br />
        버튼에 아이콘이 들어갈 경우 icoBtn class 추가 후, 이미지 넣을 class도
        추가
        <br />
        버튼 사이즈가 34*34일 경우 icoBtnS class 추가 후, 이미지 넣을 class도
        추가. [ 현재 작업되어 있는 아이콘 : plus(white,blue,black) / minus /
        prev / next / delete / excel ]
        <br />
        <br />
        ※icoBtn의 경우 cbtn/sbtn/tbtn 값에 따라감.
        <br />
        <br />
        ex:
      </p>

      <div class="btn-wrap">
        <button class="btn cbtn btn_bg04 icoBtn icoPlusB">추가하기</button>
        <button class="btn tbtn btn_bg04 icoBtn icoPlus">지역추가</button>
        <button class="btn btn_bg04 icoBtnS icoMinus"></button>
      </div>

      <br />
      <br />
      <div class="btn-wrap">
        <button class="btn cbtn btn_bg01">파트너등록</button>
        <button class="btn cbtn btn_bg04">목록</button>
        <button class="btn cbtn btn_bg04">차종별 보유현황</button>
        <button class="btn cbtn btn_bg01 icoBtn icoPlusW">노출지역 추가</button>
        <button class="btn cbtn btn_bg04 icoBtn icoPlusB">추가하기</button>
        <button class="btn cbtn btn_bg04 icoBtn icoDel">삭제하기</button>
        <button class="btn tbtn btn_bg04 icoBtn icoDel">삭제</button>
        <button class="btn tbtn btn_bg04 icoBtn icoExcel">엑셀다운로드</button>
        <button class="btn tbtn btn_bg04 icoBtn icoPlus">지역추가</button>
        <button class="btn tbtn btn_bg04 icoBtn icoPlus" disabled>
          지역추가
        </button>
        <button class="btn btn_bg04 icoBtnS icoMinus"></button>
        <button class="btn btn_bg04 icoBtnS icoPrev"></button>
        <button class="btn btn_bg04 icoBtnS icoNext"></button>
        <button class="btn cbtn btn_bg03">휴차해제</button>
        <button class="btn sbtn btn_bg02">검색</button>
        <button class="btn cbtn btn_bg01">REborn ERP 계정 생성</button>
        <button class="btn tbtn btn_bg05">부활</button>
        <button class="btn tbtn btn_bg04">중복확인</button>
        <button class="btn tbtn btn_bg04" disabled>중복확인</button>
      </div>
    </div>
  </div>

  <br />
  <br />

  <!-- popup -->
  <p class="t_center">팝업 버튼 클릭시 팝업 나옴</p>
  <div class="btn-wrap">
    <button class="btn cbtn btn_bg01" @click="openPop()">팝업</button>
  </div>

  <Popup ref="popup" class="medium" v-show="popVer1">
    <template #popupHead>
      <h2>{{ popTit1 }}</h2>
      <p>{{ popTxt1 }}</p>
    </template>
    <template #popupBody>
      <table class="data-table-ty04">
        <caption>{{ popTit1 }}</caption>
        <colgroup>
          <col style="width: 30%;" />
          <col style="" />
        </colgroup>
        <tbody>
          <tr>
            <th>날짜 선택</th>
            <td>
              <div class="date-input-wrap">
                <DateLayout placeholder="날짜 선택"></DateLayout>
              </div>
            </td>
          </tr>
          <tr>
            <th>날짜 & 시간 선택</th>
            <td>
              <div class="date-input-wrap">
                <DateTimeLayout placeholder="날짜, 시간 선택"></DateTimeLayout>
              </div>
            </td>
          </tr>
          <tr>
            <th rowspan="2">시작일 ~ 종료일,<br/>날짜 & 시간 선택</th>
            <td>
              <div class="date-input-wrap">
                <DateTimeLayout placeholder="시작일을 선택해주세요."></DateTimeLayout>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="date-input-wrap">                
                <DateTimeLayout placeholder="종료일을 선택해주세요."></DateTimeLayout>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <span class="guide_desc">
        ※ ON/Off 버튼으로 차량을 노출 또는 비 노출시킬 수 있습니다.
      </span>
    </template>
    <template #popupBtn>
      <div class="btn-wrap">
        <button class="btn cbtn btn_bg04">닫기</button>
        <button class="btn cbtn btn_bg03">휴차해제</button>
        <button class="btn cbtn btn_bg01">수정하기</button>
      </div>
    </template>
  </Popup>

  <div class="mb50">&nbsp;&nbsp;&nbsp;&nbsp;</div>
  <BarTimeChart></BarTimeChart>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import Pagination from './Pagination.vue'
import Select from './Select.vue'
import Popup from './Popup.vue'
import DateLayout from './DatePicker.vue'
import DateTimeLayout from './DateTimePicker.vue'
import BarTimeChart from './BarTimeChart.vue'

export default defineComponent({
  name: 'Guide',
  components: {
    Pagination,
    Select,
    Popup,
    DateLayout,
    DateTimeLayout,
    BarTimeChart,
  },
  props: {},
  data() {
    return {
      placeholder: 'placeholder',
      value: 'value',
      number: '1',
      tel: '01012345678',
      closed: '휴차',
      delete: '삭제차량',

      chkItems: [
        {
          id: 1,
          label: '체크01',
        },
        {
          id: 2,
          label: '체크02',
        },
      ],
      rdoItems: [
        {
          id: 1,
          label: '라디오01',
        },
        {
          id: 2,
          label: '라디오02',
        },
      ],

      // 페이징
      page: {
        totalCount: 1,
        totalPages: 5,
        page: 0,
        size: 5,
      },

      popVer1: false,

      // 팝업 타이틀
      popTit1: '팝업 타이틀',
      popTxt1: '팝업 서브 타이틀.',

      closedCarAdmin: 'mklim',
      closedCarDate: '2023-03-22 18:26:12',
      closedCarCause: '사고로 인한 차량 수리',

      // 리스트 호출 data
      list: {
        //regBeginDt: ref(new Date()),
        //regEndDt: ref(new Date()),
        progsSttus: '',
        name: '',
        moTelNo: '',
        repTelNo: '',
      },
      regBeginDt: '2023-02-20',
      regBeginTime: '12:40',
      regEndDt: '2023-02-20',
      regEndTime: '12:40',

      registerDate: '(등록 2023-03-21  18:19)',
      deleteDate: '(삭제 2023-03-20  14:15)',

      // 차종 추가요쳥 팝업
      popTit2: '차종 추가요청',
      popTxt2: '차종 추가요청 또는 옵션 추가요청을 선택해서 입력하세요.',

      rdoItems1: [
        { label: '차종 추가요청', value: 'default' },
        { label: '옵션 추가요청', value: 'opt1' },
      ],

      inputText3: '',
      inputText4: '',
      inputText5: '',
      inputText6: '',
      inputText7: '',
      inputText8: '',
      inputText9: '',
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  computed: {},
  methods: {
    openPop() {
      this.popVer1 = true
    },
  },
})
</script>

<style scoped>
.popup {
  position: fixed;
}
.guide-wrap {
  margin-top: 50px;
}
.guide-box {
  display: flex;
  justify-content: center;
}
.guide-area {
  text-align: center;
}
.guide-area + .guide-area {
  margin-left: 200px;
}
.guide-wrap > h2 {
  font-size: 50px;
  color: #222;
  font-weight: bold;
  text-align: center;
  padding-bottom: 50px;
}
.guide-wrap h3 {
  font-size: 20px;
  color: #1ea8e7;
  font-weight: bold;
  padding: 30px 0 10px;
}
.guide-area .select {
  margin: auto;
}
</style>
