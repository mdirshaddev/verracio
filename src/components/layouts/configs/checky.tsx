import { Icons } from 'shared-config/icons';
import { Avatar, AvatarFallback, AvatarImage } from 'shared-ui/avatar';

export type ChecklyConfig = typeof checklyConfig;

export const checklyConfig = {
  checklyStatus: 'https://mdirshad.checkly-dashboards.com',
  checklyTooltipMessage: () => (
    <div className='flex justify-between space-x-4'>
      <Avatar>
        <AvatarImage src='https://avatars.githubusercontent.com/u/68414911?u=792d1bc1e45ef3fb7a4f6763de3569ae3b077434&v=4' />
        <AvatarFallback>MI</AvatarFallback>
      </Avatar>
      <div className='space-y-1'>
        <h4 className='text-sm font-semibold'>Checkly</h4>
        <p className='text-sm'>
          Using Checkly for monitoring System Operational Status
        </p>
        <div className='flex items-center pt-2'>
          <Icons.calendar className='mr-2 h-4 w-4 opacity-70' />{' '}
          <span className='text-xs text-muted-foreground'>
            Started 1, September 2023
          </span>
        </div>
      </div>
    </div>
  )
};
