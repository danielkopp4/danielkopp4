import { Previewable } from "../common/GriddedPreviews";

export const projectPreviews: Previewable[] = [
    { 
        to: 'https://github.com/danielkopp4/DocumentSearch',
        title: 'Fuzzy Document Search',
        description: 'Fuzzy searches through a large dataset of documents\
         to find specific details. Uses a natural language model to analyze\
         documents and queries\
        '
    }, {
        to: 'https://github.com/danielkopp4/AnimationUsingEulerianMotion',
        title: 'Infinitely Looping Video Generator',
        description: 'Takes one image and produces an infinitely looping video. \
        Implementation of the paper Animating Pictures with Eulerian Motion Fields (Holynski et al.). \
        Uses an image-to-image GAN architecture and eulerian motion field.\
        '
    }, {
        to: 'https://github.com/danielkopp4/AlphaZeroChess',
        title: 'AlphaZero Chess Ai',
        description: 'Able to play chess using only self-play\
         level chess matches. Implementation of AlphaZero a general reinforcement learning algorithm\
         (Silver et al.)'
    }
];