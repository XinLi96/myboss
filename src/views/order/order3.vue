<template>
    <div class="content">
        <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="100" :current="1" @on-change="changePage"></Page>
            </div>
        </div>
        <!-- modalEdit -->
        <Modal
            v-model="modalEdit"
            title="Edit"
            ok-text="修改"
            cancel-text="Cancel"
            v-on:on-ok="editSucc()">
            <Form :label-width="50">
              <Form-item v-for="(value, key) in dataEdit" :key="dataEdit.id">
                <label for="" v-model="key"></label>
                <Input v-model="dataEdit[key]" :placeholder="'Please enter' + key"></Input>
              </Form-item>
            </Form> 
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modalEdit: false,
                dataEdit: {},
                tableData1: this.mockTableData1(),
                tableColumns1: [
                    {
                        title: '姓名',
                        sortable: true,
                        key: 'name'
                    },
                    {
                        title: '地址',
                        key: 'time',
                        render: (h, params) => {
                            return h('div', '北京市大兴区地盛北街' + params.row.time + '号');
                        }
                    },
                    {
                        title: '生成时间',
                        sortable: true,
                        key: 'update',
                        render: (h, params) => {
                            return h('div', this.formatDate(this.tableData1[params.index].update));
                        }
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
                    },
                    {
                        title: '修改',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'warning',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            for (let i in params.row) {
                                                this.dataEdit[i] = params.row[i];
                                            }
                                            this.modalEdit = true 
                                        }
                                    }
                                }, '修改'),
                            ]);
                        }
                    }
                ]
            }
        },
        methods: {
            mockTableData1 () {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        name: 'dasjk' + Math.floor(Math.random () * 100 + 1),
                        time: Math.floor(Math.random () * 7 + 1),
                        update: new Date()
                    })
                }
                return data;
            },
            formatDate (date) {
                const y = date.getFullYear();
                let m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
            },
            changePage () {
                // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
                this.tableData1 = this.mockTableData1();
            },
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.tableData1[index].name}<br>地址：${this.tableData1[index].time}<br>生成时间：${this.tableData1[index].update}`
                })
                // console.log(index);
            },
            remove (index) {
                this.tableData1.splice(index, 1);
                console.log(index);
            },
            edit (index) {
                this.editName = this.tableData1[index].name;
                this.editAdd = this.tableData1[index].time;
                this.$Modal.confirm({
                    title: '修改信息',
                    content: `姓名：<input type="text" style="margin-bottom:20px;" value=${this.editName} v-model="editName"><br>地址：<input type="text" value=${this.editAdd} v-model="editAdd">`,
                    okText: '修改',
                    onOk: ()=>{
                        this.editSucc(index);
                    }
                });
            },
            editSucc () {
                console.log(this.dataEdit);
                this.tableData1[this.dataEdit._index].name = this.dataEdit.name;
                this.tableData1[this.dataEdit._index].time = this.dataEdit.time;
            }
        }
    }
</script>
