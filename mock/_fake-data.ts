export function createFakeUserList() {
  return [
    {
      id: '1',
      username: 'Hongbusi',
      realName: 'Hongbusi',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      desc: 'zhe',
      password: 'admin',
      token: 'fakeToken1',
      homePath: '/dashboard/analysis',
      roles: [
        {
          roleName: 'Super Admin',
          value: 'super'
        }
      ]
    },
    {
      id: '2',
      username: 'test',
      password: 'admin',
      realName: 'test user',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
      desc: 'tester',
      token: 'fakeToken2',
      homePath: '/dashboard/workbench',
      roles: [
        {
          roleName: 'Tester',
          value: 'test'
        }
      ]
    }
  ]
}

export function createFakeMenuList(id: string) {

}
