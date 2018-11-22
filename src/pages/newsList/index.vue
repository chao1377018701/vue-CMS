<template>
    <div class="news-list-container">
        <ul class="mui-table-view">
			<li v-for="(item) in newsList" :key="item.id" class="mui-table-view-cell mui-media">
				<router-link :to="'/home/newsInfo/'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h4 class="title mui-ellipsis">{{item.title}}</h4>
						<p>
                            <span class="mui-pull-left">发表时间: <span class="ctime">{{item.add_time | dateFormat()}}</span> </span>
                            <span class=" mui-pull-right">点击: <span class="click"> {{ item.click}}</span>次</span>  
                        </p>
					</div>
				</router-link>
			</li>
		

		</ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            newsList:[]
        }
    },
    created() {
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('api/getnewslist').then(result=>{
                if(result.body.status==0){
                    this.newsList=result.body.message
                }else{
                    Toast("新闻列表获取失败!请重试!");
                }
            })
        }
    }
};
</script>

<style lang="less">
.news-list-container {
  .mui-table-view {
    .mui-table-view-cell > a {
      display: flex;
      align-items: center; //垂直居中
      //justify-content: center; //水平居中
    }
    .mui-media-body {
        width: 100%;
      .title {
        font-size: 13px;
        font-weight: bold;
      }
     > p{
         width: 100%;
     }
        .ctime,
        .click {
          font-size: 12px;
          color: cyan;
        }
        .click{
            color: red;
        }
      
    }
  }
}
</style>


