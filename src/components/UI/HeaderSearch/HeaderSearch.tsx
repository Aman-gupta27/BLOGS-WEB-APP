import { IconSearch } from '@tabler/icons-react';
import { Autocomplete, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderSearch.module.css';

// import '@mantine/core/styles.css';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);

  // const items = links.map((link) => (
  //   <a
  //     key={link.label}
  //     href={link.link}
  //     className={classes.link}
  //     onClick={(event) => event.preventDefault()}
  //   >
  //     {link.label}
  //   </a>
  // ));

  return (
    <header  className={classes.header}>
      <div className={classes.inner}>
        <Group>
            <img className='h-[4vh]' src="https://ik.imagekit.io/sheryians/Sheryians_logo_EzwgcppnD" alt="" />
          <h1 className='text-3xl font-medium'>Sheryians</h1>
        <Group>
          <Autocomplete
            className='w-full bg-red-100 '
            placeholder="Search"
            leftSection={<IconSearch size={16} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          />
        </Group>
        </Group>
          <div className='flex items-center gap-10 '>
            <h4 className=' text-xl'>All Blogs</h4>
            <div className='h-[5vh] w-[3vw] overflow-hidden border border-zinc-500 rounded-[50%] bg-red-100'>
              <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          </div>
      </div>
    </header>
  );
}


  {/* <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group> */}