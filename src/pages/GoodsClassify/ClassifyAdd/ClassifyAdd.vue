<template>
  <!--*****************************************-->
  <div id="center">
    <el-form>
      <el-form-item label="商品分类" :label-width="formLabelWidth">
        <el-input v-model="type" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品名称" :label-width="formLabelWidth">
        <el-input v-model="gc_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" :label-width="formLabelWidth">
        <el-input v-model="price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品售价" :label-width="formLabelWidth">
        <el-input v-model="sale" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="gotoList">取 消</el-button>
      <el-button type="primary" @click="goodsAdd">确 定</el-button>
    </div>
  </div>
  <!--*****************************************-->
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: "AddGoods",
    data(){
      return{
        type:'',//商品类型
        gc_name:'',//商品名称
        price:'',//商品价格
        sale:'',//商品售价
      }
    },
    methods:{
      //点击确认添加按钮
      goodsAdd(){//点击确认按钮的时候
        const {type,gc_name,price,sale}=this;
        this.$store.dispatch('getGoodsAdd',{type,gc_name,price,sale});
      },
      gotoList(){//点击取消的按钮的时候，跳转到商品分类页面
        this.$router.push('/shop_manger/goodsclassify');
      }
    },
    computed:{
      ...mapState(['goods'])
    },
    watch:{
      //想监视数据改变的时候，当页面跳转的时候刷新，结果没有实现
      goods:function (val,oldval) {
        this.$router.push('/shop_manger');
        setTimeout(()=>{
          this.$router.push('/shop_manger/goodsclassify');
        },3)
      }

    },

  }
</script>

<style>
#center{
  width: 600px;
  height: 500px;
  padding-left: 10px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin:auto;
  background:#eee;
  z-index: 2;
  color:#fff;
}

</style>
