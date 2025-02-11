import PersonalBlog from './个人博客.json'
import Team from './Team.json'

export default {
  title: '博客看点',
  nav: [
    {
      title: '个人博客',
      nav: PersonalBlog,
    },
    {
      title: 'Team',
      nav: Team,
    },
  ],
}
