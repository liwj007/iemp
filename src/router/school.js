/**
 * Created by liwj0 on 2017/6/26.
 */
const Main = r => require.ensure([], () => r(require('@/components/Main')), 'Main')

const School1 = r => require.ensure([], () => r(require('@/components/school/project/Index')), 'school')
const School2 = r => require.ensure([], () => r(require('@/components/school/project/Index2')), 'school')
const Check = r => require.ensure([], () => r(require('@/components/school/project/Check')), 'school')
const Detail = r => require.ensure([], () => r(require('@/components/school/project/Detail')), 'school')
const CheckView = r => require.ensure([], () => r(require('@/components/school/project/CheckView')), 'school')
const DetailView = r => require.ensure([], () => r(require('@/components/school/project/DetailView')), 'school')

const Process1 = r => require.ensure([], () => r(require('@/components/school/process/Index')), 'process')
const ProcessDetail = r => require.ensure([], () => r(require('@/components/school/process/Detail')), 'process')
const Summary = r => require.ensure([], () => r(require('@/components/school/process/Summary')), 'process')
const SummaryCheck = r => require.ensure([], () => r(require('@/components/school/process/Check')), 'process')
const SummaryDetail = r => require.ensure([], () => r(require('@/components/school/process/SummaryDetail')), 'process')

const PerProduct = r => require.ensure([], () => r(require('@/components/school/performance/Product')), 'performance')
const PerStudent = r => require.ensure([], () => r(require('@/components/school/performance/Student')), 'performance')
const PerStudentDetail = r => require.ensure([], () => r(require('@/components/school/performance/StudentDetail')), 'performance')
const PerTeacher = r => require.ensure([], () => r(require('@/components/school/performance/Teacher')), 'performance')
const PerTeacherDetail = r => require.ensure([], () => r(require('@/components/school/performance/TeacherDetail')), 'performance')
const PerCheck = r => require.ensure([], () => r(require('@/components/school/performance/Check')), 'performance')
const Workload = r => require.ensure([], () => r(require('@/components/school/performance/Workload')), 'performance')
const WorkloadCheck = r => require.ensure([], () => r(require('@/components/school/performance/WorkloadCheck')), 'performance')
const WorkloadDetail = r => require.ensure([], () => r(require('@/components/school/performance/WorkloadDetail')), 'performance')

const Organization = r => require.ensure([], () => r(require('@/components/school/other/system/Organization')), 'organization')
const OrganizationList = r => require.ensure([], () => r(require('@/components/school/other/system/List')), 'organization')
const Major = r => require.ensure([], () => r(require('@/components/school/other/system/Major')), 'organization')
const Class = r => require.ensure([], () => r(require('@/components/school/other/system/Class')), 'organization')
const Student = r => require.ensure([], () => r(require('@/components/school/other/system/Student')), 'organization')
const Teacher = r => require.ensure([], () => r(require('@/components/school/other/system/Teacher')), 'organization')
const Right = r => require.ensure([], () => r(require('@/components/school/other/system/Right')), 'organization')
const Statistic = r => require.ensure([], () => r(require('@/components/school/other/Statistic')), 'organization')

const Award = r => require.ensure([], () => r(require('@/components/school/other/award/Award')), 'award')
const AwardTeacher = r => require.ensure([], () => r(require('@/components/school/other/award/Teacher')), 'award')
const AwardStudent = r => require.ensure([], () => r(require('@/components/school/other/award/Student')), 'award')

const CompetitionList = r => require.ensure([], () => r(require('@/components/school/competition/LevelCheck')), 'competition')
const CompetitionIndex = r => require.ensure([], () => r(require('@/components/school/competition/Index')), 'competition')
const CompetitionCheck = r => require.ensure([], () => r(require('@/components/school/competition/Check')), 'competition')
const CompetitionDetail = r => require.ensure([], () => r(require('@/components/school/competition/Detail')), 'competition')
const ProjectList = r => require.ensure([], () => r(require('@/components/school/competition/ProjectList')), 'competition')
const ProjectDetail = r => require.ensure([], () => r(require('@/components/school/competition/ProjectDetail')), 'competition')

export default {
  path: '/school',
  component: Main,
  children: [
    {
      path: 'statistic',
      component: Statistic
    },
    {
      path: 'projectlist',
      redirect: 'projectlist/list'
    },
    {
      path: 'projectlist/list',
      component: ProjectList
    },
    {
      path: 'projectlist/detail/:id',
      component: ProjectDetail
    },
    {
      path: 'competition',
      redirect: 'competition/list'
    },
    {
      path: 'competition/list',
      component: CompetitionList
    },
    {
      path: 'competition/check',
      component: CompetitionIndex,
      children: [
        {
          path: 'opinion/:id',
          component: CompetitionCheck
        },
        {
          path: 'detail/:id',
          component: CompetitionDetail
        }
      ]
    },
    {
      path: 'award',
      component: Award,
      children: [
        {
          path: '',
          redirect: 'teacher'
        },
        {
          path: 'teacher',
          component: AwardTeacher
        },
        {
          path: 'student',
          component: AwardStudent
        }
      ]
    },
    {
      path: 'system',
      component: Organization,
      children: [
        {
          path: '',
          redirect: 'organization'
        },
        {
          path: 'organization',
          component: OrganizationList
        },
        {
          path: 'major/:id',
          component: Major
        },
        {
          path: 'class/:id',
          component: Class
        },
        {
          path: 'student',
          component: Student
        },
        {
          path: 'teacher',
          component: Teacher
        },
        {
          path: 'right',
          component: Right
        }
      ]
    },
    {
      path: '',
      redirect: 'project/admin'
    },
    {
      path: 'project',
      redirect: 'project/admin'
    },
    {
      path: 'project/admin',
      name: 'admin',
      component: School1
    },
    {
      path: 'project/his',
      name: 'his',
      component: School2
    },
    {
      path: 'project/check/:id',
      name: 'check',
      component: Check
    },
    {
      path: 'project/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: 'project/checkview/:id',
      name: 'checkview',
      component: CheckView
    },
    {
      path: 'project/detailview/:id',
      name: 'detailview',
      component: DetailView
    },
    {
      path: 'process/admin',
      name: 'padmin',
      component: Process1
    },
    {
      path: 'process/summary',
      name: 'summary',
      component: Summary
    },
    {
      path: 'process',
      redirect: 'process/admin'
    },
    {
      path: 'process/detail/:id',
      name: 'pdetail',
      component: ProcessDetail
    },
    {
      path: 'process/check/:id',
      name: 'pCheck',
      component: SummaryCheck
    },
    {
      path: 'process/summary_detail/:id',
      name: 'summaryDetail',
      component: SummaryDetail
    },
    {
      path: 'performance',
      redirect: 'performance/product'
    },
    {
      path: 'performance/product',
      name: 'perProduct',
      component: PerProduct
    },
    {
      path: 'performance/student',
      name: 'perStudent',
      component: PerStudent
    },
    {
      path: 'performance/teacher',
      name: 'perTeacher',
      component: PerTeacher
    },
    {
      path: 'performance/check/:id',
      name: 'perCheck',
      component: PerCheck
    },
    {
      path: 'workload',
      name: 'workload',
      component: Workload
    },
    {
      path: 'workload/check/:id',
      component: WorkloadCheck
    },
    {
      path: 'workload/detail/:id',
      component: WorkloadDetail
    },
    {
      path: 'performance/student_detail/:id',
      name: 'perStudentDetail',
      component: PerStudentDetail
    },
    {
      path: 'performance/teacher_detail/:id',
      name: 'perTeacherDetail',
      component: PerTeacherDetail
    }
  ]
}
