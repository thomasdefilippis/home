import ECG from './jpgs/ECG-Sequence.jpg';
import ekg from './gifs/ekg.gif';
import binarySwap from './jpgs/binarySwap.jpg';
import binarySwapGif from './gifs/binarySwap.gif';
import scrabble from './jpgs/scrabble.jpg';
import WildTile from './gifs/WildTile.gif';
import WiggledStrings from './jpgs/WiggledStrings.jpg';
import Swap from './jpgs/Swap.jpg';
import SwapXY from './gifs/SwapXY.gif';
import Safecracker from './jpgs/Safecracker.jpg';
import safecrackerGif from './gifs/safecrackerGif.gif';

  export default  [
    {
        title: 'The EKG Sequence',
        imageUrl: ECG,
        description: "Given an integer n implement a function that returns its EKG Sequence Index.",  
        edabit: 'https://edabit.com/challenge/9DjLa5TbT7X73hj5n',
        gifUrl: ekg,
        sourceLink: 'https://github.com/thomasdefilippis/Edabit-Code/blob/master/EKG-Sequence/EKG.js'
    },

    {
        title: 'Converting One Binary String to Another',
        imageUrl: binarySwap,
        description: 'Write a function that returns the minimum number of swaps to convert the first binary string into the second.',
        edabit: 'https://edabit.com/challenge/HZcpmfBg6NstB5soN',
        gifUrl: binarySwapGif,
        sourceLink: 'https://github.com/thomasdefilippis/Edabit-Code/blob/master/ConvertBinary/convert.js'
    },

    {
        title: 'Wild Tiles',
        imageUrl: scrabble,
        description: "Write a function that returns true if it is possible to build a string with a particular scrabble hand. Hashtags '#' represent wild tiles.",
        edabit: 'https://edabit.com/challenge/2vmA8faDorenTwLf3',
        gifUrl: WildTile,
        sourceLink: "https://github.com/thomasdefilippis/Edabit-Code/blob/master/WildTiles/WildTiles.js"
    },

    {
        title: 'Wiggled Strings',
        imageUrl: WiggledStrings,
        description: "Create a function that returns an array of the given string but offset by spaces. Here are some more precise instructions: Keep adding spaces on the left until you have the same number of spaces as the word length. Then keep removing spaces until you reach the original word.",
        edabit: 'https://edabit.com/challenge/jNanQ3zKkCdA9ANJw',
        gifUrl: WildTile,
        sourceLink: "https://github.com/thomasdefilippis/Edabit-Code/blob/master/WiggledStrings/WiggledStrings.js"
    },

    {
        title: 'Swap X and Y Coordinates',
        imageUrl: Swap,
        description: "Write a function that swaps the X and Y coordinates in a string.",
        edabit: 'https://edabit.com/challenge/tu8YN5dpi56vWozDS',
        gifUrl: SwapXY,
        sourceLink: "https://github.com/thomasdefilippis/Edabit-Code/blob/master/Swap/Swap.js"
    },
    
    {
        title: 'SafeCracker',
        imageUrl: Safecracker,
        description: "Given the starting (top) position of the dial and the increments used for each turn of the dial, return an array containing the combination of the safe.",
        edabit: 'https://edabit.com/challenge/ggDcLksKsBd8xAiFd',
        gifUrl: safecrackerGif,
        sourceLink: "https://github.com/thomasdefilippis/Edabit-Code/blob/master/safecracker/safecracker.js"
    },
]