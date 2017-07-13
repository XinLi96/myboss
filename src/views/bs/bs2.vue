<template>
	<div class="content">
		<div style="text-align:center;margin-top:20px;margin-bottom:20px;">
			<Button type="primary" @click="push">添加成员</Button>
		</div>
	  	<Table border :columns="columns7" :data="data6"></Table>
	  	<div style="text-align:center;margin-top:20px;">
	  		<Page :total="100" style=""></Page>
	  	</div>
	</div>
</template>
<script>
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: '姓名',
                        key: 'name',
                        sortable: true,
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ],
                temp: {
                	name: '',
                	age: -1,
                	address: ''
                }
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            push () {
            	this.temp.name = 'test'+Math.floor(Math.random()*100);
            	this.temp.age = Math.floor(Math.random()*100);
            	this.temp.address = 'dsadsad'+Math.floor(Math.random()*100);
            	this.data6.push(this.temp);
            }
        }
    }
</script>
<style>
	/**/
</style>
