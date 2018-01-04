<template>
    <div class="ownInfo">
        <h3 class="contentName">个人信息</h3>
        <el-collapse @change="handleChange">
            <el-collapse-item title="基本信息" name="1">
                <div style="text-indent:30px">姓名：Carlton</div>
                <div style="text-indent:30px">年龄：25</div>
                <div style="text-indent:30px">职业：前端开发工程师（IT）</div>
                <div style="text-indent:30px">籍贯：河北省张家口市张北县</div>
                <div style="text-indent:30px">学历：华北理工大学（原河北理工/河北联合大学）[本科学院]</div>
                <div style="text-indent:30px">所在地：目前在北京就业，从事前端开发</div>
                <div style="color:#409EFF;text-indent:30px">座右铭：既是为了生活，那么就不只是苟且；爱你所做，做你所爱</div>
            </el-collapse-item>
            <el-collapse-item title="职业生涯" name="2">
                <h4 style="color:pink;text-indent:30px">人生的经历丰富多彩，职业生涯也将是其中重要的一部分</h4>
                <div style="text-indent:30px">2015年6月份：毕业于华北理工大学</div>
                <div style="text-indent:30px">2015年年初：开始参加工作，起步于“亚信科技”；主做外包项目</div>
                <div style="text-indent:30px">2016年上半年：更换工作，到现在的“锦绣新农”；主做电商</div>
                <div style="color:plum;text-indent:30px">未来：未来的路很长，但并不值得迷茫、畏惧；人生没有终点，职业没有终点，一步步前进，就是最好的尝试、努力</div>
            </el-collapse-item>
            <el-collapse-item title="职业规划" name="3">
                <h4 style="color:palevioletred;text-indent:30px">这个世界的未来是互联网的时代，我们是走在时代前端的人物</h4>
                <div style="text-indent:30px">1、主要关注于技术领域</div>
                <div style="text-indent:30px">2、历经几次跳槽，见识不同公司的互联网领域特点，熟悉各项热度较高技术</div>
                <div style="text-indent:30px">3、逐步完善自己在技术方面的能力，快速成长到独立完成基本公司任务</div>
                <div style="text-indent:30px">4、扎实前端技术，顺应时代更迭</div>
                <div style="text-indent:30px">5、涉及后端，逐渐接触、了解、熟悉，逐步可以简单实用</div>
                <div style="text-indent:30px">6、逐步向全栈工程师的方向出发</div>
                <div style="color:brown;text-indent:30px">励志：路就在脚下，不停奔跑是我们唯一的选择；</div>
            </el-collapse-item>
            <el-collapse-item title="人生感悟" name="4">
                <h4 style="color:orange;text-indent:30px">漫漫人生路，吾将上下而求索</h4>
                <div style="text-indent:30px">当下社会，是网络的时代，是信息的时代。</div>
                <div style="text-indent:30px">不同于曾经的墨守成规，如今社会，竞争之激烈，现实之残酷，触目惊心；想在此等状况下，博取一线机会，
                    并不容易；很多人盲目跟从，追随时代社会风气，一头扎进去，然而大浪淘沙，适者生存，这是亘古不变的道理，
                    没有清晰的认知和过人的能力，注定只能迷失在时代的大浪中，如一颗砂砾般，无足轻重。
                </div>
                <div style="text-indent:30px">俗话说：“360行，行行出状元”，古话并没有错。然，差异却也是实实在在的存在的；在不同的时代，不同的潮流气息下，
                    总是有区别的，有区别，那么对每个人选择的人生，就总会有那么一点点的影响；不过，在正真的赢家面前，这些都并不是
                    问题，只能成为成功的垫脚石；抱怨时代不公，老天无情的，其实都只是挣扎在底层的弱者而已。
                </div>
                <div style="text-indent:30px">人生多挫折，人们说：“人，生下来，便是来受罪的”；也不能说之为'迷信'，因事实也确是如此；由小到大，
                    从4、5岁便被送进了幼儿园，开始了这一生的求学之路；在中国的大环境下，注定了中国的孩子们在求学的这条
                    路上不会太轻松，甚至可以说是及其的不轻松（尤其是作为河北、山东的孩子，是深有体会的），基本到上大学，
                    青年时期的元气就已经差不多快要点滴不剩了；更可悲的是，人口的众多，教育水平的提高，普通学历已经比比皆是，
                    说不好听的，基本处于“烂大街”的状态了；这样的情况就促使学子们不得已的去继续深造下去，而因此得到的结果就是
                    毕业之期，基本都已快要30岁，甚至超过30岁了；这就使得人生精力最旺盛的阶段，都已丢在了学校了。初到社会，
                    难免对于“生存之法”陌生，如此，就注定了你需要在这大染缸中摸爬滚打几年的时间，才能对其有个大概了解，才能褪去
                    学生时期的那种稚气、冲动（说实话，这不知道到底算是好事还是坏事）；这一趟下来，你的年龄对于婚嫁，已经是岌岌可危了，
                    家中父母早已为你愁容满面，不停的为你发动“关系”苦寻你的红颜知己，除了些许不信命之人“具理抗争”（要自己追寻自己希望的爱情）之外，
                    大多数人已经默默的向命运低下了他们那曾经高傲的头颅，随之失去的，还有那份曾经对幸福，对爱情的向往、期许以及坚持；
                    就这样，在这种大环境的压力之下，百分之九十九的人，都是碌碌无为的来人间“飘荡”了一遭。
                </div>
                <div style="text-indent:30px">如此，我们是不是就不做挣扎，就这样，慢慢的走一趟大众人生呢？当然不！
                    人生总还是要有希望的，就如同还是有那么多人挣脱了命运的枷锁，成功的跳出了这方天地，可以以一种局外人的
                    生活姿态来过自己所期许的生活，这，便是希望！
                </div>
                <div style="text-indent:30px">既如此，能做的，唯有以自身为中心，与命运奋力抗争而已；博好了，一方天地，你
                    可满意的随意驰骋，博不好了，大抵不过也就是个碌碌无为，也没什么其他了，但，起码，你努力过了，这，就是区别！
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleChange() {}
  }
};
</script>

<style scoped>
.contentName {
  padding: 10px 0;
}
</style>
