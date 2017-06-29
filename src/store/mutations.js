const mutations = {
  SET_LOGIN_INFO (state, payload) {
    state.username = payload
  },
  ADD_USER_RIGHT (state, item) {
    state.rights.push(item)
  },
  ADD_TEACHER_AWARD_STANDARD (state, item) {
    state.teacherAwardStandard.push(item)
  },
  ADD_STUDENT_AWARD_STANDARD (state, item) {
    state.studentAwardStandard.push(item)
  },
  REMOVE_CHECK_CP (state) {
    state.projectList.push(state.competitionList[0])
    state.competitionList.splice(0, 1)
  },
  PROJECT_CHECK_CP (state, item) {
    state.toCheckProjectList.splice(0, 1)
    state.checkedProjectList.push(item)
  }
}

export default mutations
