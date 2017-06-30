<template>
    <Form ref="formDynamic" :model="formDynamic" :label-width="80">
        <Form-item
            v-for="(item, index) in formDynamic.items"
            :key="item"
            :label="'成员' + (index + 1)"
            :prop="'items.' + index + '.value1'"
            :rules="{required: true, message: '成员' + (index + 1) +'不能为空', trigger: 'blur'}">
            <Row>
                <Col span="5">
                    <Input type="text" v-model="item.value1" placeholder="学生姓名"></Input>
                </Col>
                <Col span="7">
                    <Input type="text" v-model="item.value2" placeholder="学生学号"></Input>
                </Col>
                <Col span="8">
                    <Select v-model="item.value3">
                        <Option v-for="item in studentList"  :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </Col>
                <Col span="2" offset="1">
                    <Button type="ghost" @click="handleRemove(index)">删除</Button>
                </Col>
            </Row>
        </Form-item>
        <Form-item>
            <Row>
                <Col span="12">
                    <Button type="dashed" long @click="handleAdd" icon="plus-round">添加成员</Button>
                </Col>
            </Row>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit('formDynamic')">提交</Button>
            <Button type="ghost" @click="handleReset('formDynamic')" style="margin-left: 8px">重置</Button>
        </Form-item>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                model1: 0,
                studentList: [
                  {
                    value: '项目成员',
                    label: '项目成员'
                  },
                  {
                    value: '项目负责人',
                    label: '项目负责人'
                  }
                ],
                formDynamic: {
                    items: [
                        {
                            value1: '刘希',
                            value2: '201633660104',
                            value3: '项目负责人'
                        },
                      {
                        value1: '金明',
                        value2: '201633334768',
                        value3: '项目成员'
                      },
                      {
                        value1: '高启迪',
                        value2: '201633667432',
                        value3: '项目成员'
                      }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleAdd () {
                this.formDynamic.items.push({
                    value1: '',
                    value2: '',
                    value3: ''
                });
            },
            handleRemove (index) {
                this.formDynamic.items.splice(index, 1);
            }
        }
    }
</script>
