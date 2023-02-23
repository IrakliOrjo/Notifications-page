import anna from './images/anna.webp'
import nathan from './images/nathan.webp'
import kibmerly from './images/kimberly.webp'
import rizky from './images/rizky.webp'
import jacon from './images/jacob.webp'
import angela from './images/angela.webp'
import mark from './images/mark.webp'
import chess from './images/image-chess.webp'

export default    [
    {
        name: 'Anna Kim',
        action: 'left the group',
        group: 'Chess Club',
        notificationTime: '2 weeks ago',
        read:true,
        img: anna,
        chessClub: 'Chess Club',
        
    },
    {
        name: 'Nathan Peterson',
        img: nathan,
        action: 'reacted to your recent post',
        reaction: '5 end-game strategies to increase your win rate',
        notificationTime: '2 weeks ago',
        read: true,
        
    },
    {
        name: 'Kimberly Smith',
        img: kibmerly,
        action: 'commented on your picture',
        picture: chess,
        notificationTime: '1 weeks ago',
        read: true,
        
    },
    {
        name: 'Rizky Hasanuddin',
        img: rizky,
        action: 'sent you a private message',
        notificationTime: '5 days ago',
        read: true,
        message: " Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
        
    },
    {
        name: 'Jacon Thompson',
        read: false,
        img: jacon,
        action: 'has joined your group',
        chessClub: 'Chess Club',
        notificationTime: '1 day ago',
    },
    {
        name: 'Angela Grey',
        read: false,
        img: angela,
        action: 'followed you',
        notificationTime: '5m ago',
    },
    {
        name: 'Mark Webber',
        read: false,
        img: mark,
        action: 'reacted to your recent post',
        reaction:'My first tournament today!',
        notificationTime: '1m ago',
        
    },
]