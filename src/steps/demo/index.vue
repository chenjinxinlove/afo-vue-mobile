<template>
  <div>
    <afo-steps :active="active">
      <afo-step>{{ step1}}</afo-step>
      <afo-step>{{ step2}}</afo-step>
      <afo-step>{{ step3}}</afo-step>
      <afo-step>{{ step4}}</afo-step>
    </afo-steps>

    <afo-button @onClick="nextStep">下一步</afo-button>
    <afo-steps direction="vertical" :active="0" active-color="#f60">
      <afo-step>
        <h3>{{status1}}</h3>
        <p>2016-07-12 12:40</p>
      </afo-step>
      <afo-step>
        <h3>{{status2}}</h3>
        <p>2016-07-11 10:00</p>
      </afo-step>
      <afo-step>
        <h3>{{status3}}</h3>
        <p>2016-07-10 09:30</p>
      </afo-step>
    </afo-steps>
  </div>
</template>

<script>
export default {
  name: 'StepsDemo',
  data () {
    return {
      active: 1,
      step1: '买家下单',
      step2: '商家接单',
      step3: '买家提货',
      step4: '交易完成',
      title2: '描述信息',
      title3: '竖向步骤条',
      status1: '【城市】物流状态1',
      status2: '【城市】物流状态',
      status3: '快件已发货'
    }
  },

  methods: {
    nextStep () {
      console.log(this.active, 'sadas')
      this.active = ++this.active % 4
    }
  }
}
</script>
