import CustomLink from './CustomLink'

type Props = {
  currentPage: string
}

const pages: { name: string, path: string }[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skill", path: "/skill" },
  { name: "Works", path: "/works" },
  { name: "Contact", path: "/contact" }
]

function currentPageLink(name: string, path: string) {
  return (
    <CustomLink href={path} prefetch className='p-10'>
      <span className=' border border-black p-3 rounded-md text-center'>{name}</span>
    </CustomLink>
  )
}

function selectableLink(name: string, path: string) {
  return (
    <CustomLink href={path} prefetch className='p-10'>
      <span className=' p-3 rounded-md text-center border border-transparent hover:border-black'>{name}</span>
    </CustomLink>
  )
}

export default function Header(currentPage: Props) {
  const headerLinks = pages.map((page) => {
    if (page.path == currentPage.currentPage) {
      return currentPageLink(page.name, page.path)
    } else {
      return selectableLink(page.name, page.path)
    }
  })

  return (
    <header className='flex justify-center items-center font-notosans text-2xl my-10'>
      <nav>
        {headerLinks}
      </nav>
    </header>
  )
}
