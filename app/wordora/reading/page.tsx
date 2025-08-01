"use client";

import React, { useState, useRef } from 'react';

export default function ReadingPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ word: '', meaning: '' });
  const dialogRef = useRef<HTMLDivElement>(null);

  const wordMeanings: { [key: string]: string } = {
    "gratefully": "Showing heartfelt appreciation or relief in response to kindness or help.",
    "instinct": "A deep, natural reaction or feeling that happens automatically, without thinking.",
    "embarrassed": "Feeling awkward or uncomfortable due to shame, mistakes, or social pressure.",
    "terrified": "Extremely afraid or shocked, often unable to react.",
    "disgusting": "Extremely unpleasant, offensive, or revolting to the senses.",
    "depressing": "Causing deep sadness, hopelessness, or emotional heaviness.",
    "nightmare": "A frightening experience or situation that feels difficult to escape or survive.",
    "victim": "A person harmed or affected by an action, event, or other person, often unfairly.",
    "invitation": "A request or offer to join, enter, or attend something.",
    "selfish": "Thinking only about yourself and not caring about others' needs or feelings.",
    "atmosphere": "The emotional feeling or mood of a place or situation.",
    "replied": "Responded to something that was said or asked.",
    "argument": "A situation where people express opposite opinions, often with anger.",
    "hissed": "Spoke in a sharp, whisper-like way, often to show anger or urgency.",
    "stranger": "A person you do not know; someone unfamiliar.",
    "pointed": "A nose shape that is sharp and narrow, often describing someone's appearance or attitude.",
    "which one?": "A chilling question suggesting a choice between two people as potential victims.",
    "break-up": "The end of a romantic relationship, usually emotional or difficult.",
    "terrified silence": "Complete quiet caused by fear, where no one dares to speak or move.",
    "pale lips": "Lips with no color, often a sign of fear, illness, or something unnatural (like a vampire).",
    "pale": "Having reduced color, often signaling."
  };

  const handleWordClick = (word: string, meaning: string) => {
    setDialogContent({ word, meaning });
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  // Close dialog when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        closeDialog();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dialogRef]);


  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Reading Practice</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bad Blood</h2>
        {
          [
            "David and Emma looked at each other across the table. The young couple were happy: the food was delicious, the light from the candles was soft and the music was perfect.",
            "David looked at Emma's beautiful smile. All the pain of his last break-up disappeared. All his doubts and fears about love had gone. His hand reached out and touched hers.",
            "'I want to ask you something.' David searched her eyes. Could she guess what was coming?",
            "Her smile made him feel brave. She held his hand. 'Don't worry. Whatever it is, I'll probably say yes!'",
            "He felt so excited. He was about to ask the most important question of his life.",
            "From the corner of the restaurant, a strange man watched them. He sat very still at his table. He held a menu but he wasn't reading it. Instead, his cold eyes looked only at the young couple.",
            "Back at their table, David suddenly felt nervous.",
            "'Excuse me,' he said to Emma. He pushed his chair back and went to the toilet. As he looked in the mirror, he told himself: 'Come on, David, come on! You can do this, mate! She's crazy about you!'",
            "Feeling ready, he went out of the bathroom. He almost walked into the extremely tall man who was waiting by the door. The man's eyes were a cold, bright blue. His face was pale with a sharp, pointed nose and thin, pale lips.",
            "'Oh, sorry!' said David.",
            "'Which one?' the man hissed. He spoke with a strong and strange accent. David had never heard that accent before.",
            "For a moment, David was confused. Then he realised what the other man meant.",
            "'Oh … this one!' said David, helpfully. 'This is the men's toilet!'",
            "David went back into the restaurant. He reached for the ring in a box in his pocket. It was time to ask her!",
            "...",
            "The taxi ride home was wonderful. The happy couple discussed their future life together. They shared their sweet feelings about each other.",
            "'The night I asked you to marry me!' said David.",
            "'The night I said yes!' replied Emma.",
            "'Just think, our whole lives together!'",
            "'Sharing, caring, …' he began.",
            "'... loving, giving!' Emma finished his sentence.",
            "They smiled at each other in loving excitement.",
            "'You are so wonderful!' said David.",
            "'And you're absolutely beautiful!' said Emma. 'I've never met anyone so lovely and kind! I'm so happy I could sing!'",
            "They entered their block of flats, holding hands. A tall man watched them from the shadows.",
            "'Which one?' he asked himself.",
            "He watched the building. He was waiting for a light to come on to show him which flat was theirs. One minute passed … two … there it was! The light went on in a third-floor window. He saw Emma for a moment as she closed the curtains.",
            "How many times had he stood on a corner like this? How many victims had he watched? Many corners! Many victims! His pale lips formed a thin smile. He moved out of the shadows to the door and pressed the buttons for every flat. The vampire was always pleased when people lived in flats. Sooner or later someone always let you in. Silly humans! They thought you were someone's pizza delivery. It was a kind of invitation, and that was all he needed to enter a home.",
            "He climbed the stairs to the third floor and walked down the hall. He didn't make a sound. He could hear the young couple laughing and talking. He put his ear against the door. He could hear what they were saying and he was happy. Young love made the sweetest blood. It was so full of life and energy.",
            "'I feel as if I'm in a film,' she was saying.",
            "'More like a dream,' he replied.",
            "'Yes, a dream. How lucky we are!'",
            "Guess who I'll be dreaming about tonight?' he said.",
            "'Who? Who?'",
            "'Her hair smells of roses! She's like an angel!'",
            "Their dream was about to become a nightmare, the listening vampire thought. Suddenly, he opened the door and stood there, showing his sharp teeth. The couple screamed and then held each other in terrified silence. The vampire could smell and taste their fear. This was how he liked it. Fear also made the blood sweeter.",
            "'There's my wallet! On the table, there! Take it!' said David. 'Take anything you want!'",
            "'I will take anything I want!' the vampire replied.",
            "'Fine! Fine! We won't stop you, I promise!' David cried.",
            "'You won't stop me. I promise!' replied the vampire.",
            "The light shone on the sharp teeth. A terrible thought came to David and Emma at the same time.",
            "'Look at his teeth! Is he ... ?'",
            "'A vampire!!'",
            "'Which one?' the vampire hissed. 'It can be … only one!'",
            "The couple's eyes were big and afraid. Their mouths open in horror. They held each other's hands and their stomachs filled with fear.",
            "'Already tonight,' continued the vampire, 'I have drunk from three. One more ... then … I can … sleep … and feel young again.'",
            "The vampire moved towards them. Instinct made David step in front of Emma to protect her. Emma gratefully held onto his back.",
            "The vampire wasn't in a hurry. He had plenty of time. Who should he attack? he asked himself. Which one?",
            "'Thank you,' Emma said quietly in David's ear, 'for what you're doing for me.'",
            "'Of course, my love. I'm here to protect you.' He felt proud as he said the words. He could fight this vampire. All he needed was a piece of wood or something to push through the heart. He looked around for something ...",
            "'You're so brave to offer yourself,' continued Emma.",
            "'Sorry?' asked David. 'What are you talking about?'",
            "'Oh!' said Emma. 'I just thought that with your love for me and everything …'",
            "David and the vampire looked at each other.",
            "'Now, listen, Emma. There is no doubt about my love for you!'",
            "'Really?' she replied. She didn't believe him.",
            "'But you can't expect me to just give him my life!'",
            "'I wasn't saying you should!' she said. 'It's just one of our options, that's all!'",
            "'Well, think of another one!' he shouted. 'Why don't you offer yourself to him to save me!'",
            "The atmosphere in the room had certainly turned ugly. The vampire was not pleased that the fear and love were now silly, selfish arguments.",
            "Emma was very angry. 'I hope you're joking!'",
            "'Let's see how strong your love is!'",
            "'What a horrible man!'",
            "'What about the woman I was planning to marry?! Offering me to a vampire like a bone to a dog!'",
            "'You said my hair smells of roses!' she cried.",
            "'All right, all right! Relax!' David was a little embarrassed to be having this argument in front of a stranger.",
            "'I'm an angel, you said!' she carried on shouting.",
            "'MUST … DRINK!' shouted the vampire angrily as he came even closer. He wanted to make a quick kill. Then he could get away from these terrible people as soon as possible.",
            "His eyes opened wider and his teeth were bared. 'WHICH ... ONE?'",
            "'HER!' David pointed at his future wife.",
            "'HIM! HIM!' screamed Emma in anger. 'Please, HIM!'",
            "The vampire approached David.",
            "'She's younger! Sweeter!' said David.",
            "The vampire turned to Emma.",
            "'He's bigger! There's more of him!' She pointed at David.",
            "Suddenly the vampire felt tired. He had been killing for many centuries. Listening to them was depressing. How could he feel good by drinking the blood of either of these disgusting creatures?",
            "He looked down at their terrified faces and shouted, 'BAD BLOOD!'",
            "And with that, he disappeared into the night air and left Emma and David alone together. Together, as they had promised, for the rest of their lives.",
            "",
            " - Story written by Clive Lane and adapted by Nicola Prentis."
          ].map((paragraph, pIdx) => (
            <p key={pIdx} className="text-gray-700 mb-4">
              {paragraph.split(/(\b\w+\b|[.,!?;:'"\s]+)/g).map((part, sIdx) => {
                const cleanedPart = part.replace(/[.,!?;:'"\s]+$/, '').toLowerCase(); // Remove punctuation and convert to lowercase for lookup
                const originalPart = part;

                if (wordMeanings[cleanedPart]) {
                  return (
                    <span
                      key={sIdx}
                      className="text-pink-600 cursor-pointer hover:underline"
                      onClick={() => handleWordClick(cleanedPart, wordMeanings[cleanedPart as keyof typeof wordMeanings])}
                    >
                      {originalPart}
                    </span>
                  );
                }
                return originalPart;
              })}
            </p>
          ))
        }

        {showDialog && (
          <div
            ref={dialogRef}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
              <button
                onClick={closeDialog}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                &times;
              </button>
              <h3 className="text-xl font-bold mb-2 text-pink-600">{dialogContent.word}</h3>
              <p className="text-gray-700">{dialogContent.meaning}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
