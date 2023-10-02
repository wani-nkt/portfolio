import CustomLink from './CustomLink'

export default function Header() {
  return (
    <header className='flex justify-center items-center font-notosans text-2xl my-10'>
      <nav>
        <CustomLink href="/" className='p-10'>Home</CustomLink>
        <CustomLink href="/about" prefetch className='p-10'>
          About
        </CustomLink>
        <CustomLink href="/skill" prefetch className='p-10'>
          Skill
        </CustomLink>
        <CustomLink href="/works" prefetch className='p-10'>
          Works
        </CustomLink>
        <CustomLink href="/contact" prefetch className='p-10'>
          Contact
        </CustomLink>
      </nav>
    </header>
  )
}
