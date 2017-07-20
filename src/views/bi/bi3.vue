<template>
	<div class="content">
        <h1>计算器</h1>
        <ul>
            <li v-for="item in items" @click="toggleActive(item)" :class="{'active':item.active}">{{item.name}}<span>{{item.price | currency}}</span></li>
        </ul>
        <p>Total:<span>{{total() | currency}}</span></p>
	</div>
</template>

<script>
	export default {
		data: function () {
	      return {
              items: [
                  {
                      name: 'Web Development',
                      price: 300,
                      active:false
                  },{
                      name: 'Design',
                      price: 400,
                      active:false
                  },{
                      name: 'Integration',
                      price: 250,
                      active:false
                  },{
                      name: 'Training',
                      price: 220,
                      active:false
                  }
              ]
	      }
	    },
	    methods:{
            toggleActive: function(i){
                i.active = !i.active;
                console.log(i.active);
            },
            total: function (){
                var total = 0;
                this.items.forEach(function(s){
                    if(s.active){
                        total += s.price;
                    }
                });
                return total;
            }
	    }
	}
</script>
<style>

</style>