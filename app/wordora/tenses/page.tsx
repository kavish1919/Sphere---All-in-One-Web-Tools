"use client";

export default function TensesPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Tenses Practice</h1>
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-pink-600">Present Simple</h2>
          <div className="space-y-2">
            <p className="font-medium">Q: She usually ___ (go) to school by bus.</p>
            <button 
              onClick={() => document.getElementById('answer-0')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-0" className="text-green-600 hidden">A: goes</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: I ___ (like) coffee in the morning.</p>
            <button 
              onClick={() => document.getElementById('answer-1')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-1" className="text-green-600 hidden">A: like</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: They ___ (not/play) football on Sundays.</p>
            <button 
              onClick={() => document.getElementById('answer-2')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-2" className="text-green-600 hidden">A: do not play</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: What time ___ she ___ (wake) up?</p>
            <button 
              onClick={() => document.getElementById('answer-3')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-3" className="text-green-600 hidden">A: does she wake</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: He ___ (work) in a bank.</p>
            <button 
              onClick={() => document.getElementById('answer-4')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-4" className="text-green-600 hidden">A: works</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-pink-600">Present Continuous</h2>
          <div className="space-y-2">
            <p className="font-medium">Q: I ___ (study) for my exams right now.</p>
            <button 
              onClick={() => document.getElementById('answer-5')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-5" className="text-green-600 hidden">A: am studying</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: She ___ (not/watch) TV at the moment.</p>
            <button 
              onClick={() => document.getElementById('answer-6')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-6" className="text-green-600 hidden">A: is not watching</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: We ___ (go) to the market now.</p>
            <button 
              onClick={() => document.getElementById('answer-7')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-7" className="text-green-600 hidden">A: are going</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: What ___ you ___ (do)?</p>
            <button 
              onClick={() => document.getElementById('answer-8')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-8" className="text-green-600 hidden">A: are you doing</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: He ___ (play) cricket with his friends.</p>
            <button 
              onClick={() => document.getElementById('answer-9')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-9" className="text-green-600 hidden">A: is playing</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-pink-600">Past Simple</h2>
          <div className="space-y-2">
            <p className="font-medium">Q: They ___ (visit) their grandma yesterday.</p>
            <button 
              onClick={() => document.getElementById('answer-10')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-10" className="text-green-600 hidden">A: visited</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: I ___ (not/see) him at the party.</p>
            <button 
              onClick={() => document.getElementById('answer-11')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-11" className="text-green-600 hidden">A: did not see</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: She ___ (cook) a delicious meal last night.</p>
            <button 
              onClick={() => document.getElementById('answer-12')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-12" className="text-green-600 hidden">A: cooked</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: When ___ you ___ (arrive)?</p>
            <button 
              onClick={() => document.getElementById('answer-13')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-13" className="text-green-600 hidden">A: did you arrive</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: He ___ (lose) his keys.</p>
            <button 
              onClick={() => document.getElementById('answer-14')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-14" className="text-green-600 hidden">A: lost</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-pink-600">Past Continuous</h2>
          <div className="space-y-2">
            <p className="font-medium">Q: I ___ (watch) a movie when the power went out.</p>
            <button 
              onClick={() => document.getElementById('answer-15')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-15" className="text-green-600 hidden">A: was watching</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: They ___ (not/sleep) at 10 PM.</p>
            <button 
              onClick={() => document.getElementById('answer-16')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-16" className="text-green-600 hidden">A: were not sleeping</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: What ___ you ___ (do) at that time?</p>
            <button 
              onClick={() => document.getElementById('answer-17')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-17" className="text-green-600 hidden">A: were you doing</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: She ___ (read) a book.</p>
            <button 
              onClick={() => document.getElementById('answer-18')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-18" className="text-green-600 hidden">A: was reading</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: He ___ (drive) when it started raining.</p>
            <button 
              onClick={() => document.getElementById('answer-19')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-19" className="text-green-600 hidden">A: was driving</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-pink-600">Future Tense (will / going to)</h2>
          <div className="space-y-2">
            <p className="font-medium">Q: I ___ (call) you later.</p>
            <button 
              onClick={() => document.getElementById('answer-20')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-20" className="text-green-600 hidden">A: will call</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: They ___ (visit) us next week.</p>
            <button 
              onClick={() => document.getElementById('answer-21')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-21" className="text-green-600 hidden">A: are going to visit</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: It ___ (rain) tomorrow.</p>
            <button 
              onClick={() => document.getElementById('answer-22')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-22" className="text-green-600 hidden">A: will rain</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: She ___ (not/come) to the meeting.</p>
            <button 
              onClick={() => document.getElementById('answer-23')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-23" className="text-green-600 hidden">A: will not come</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: What ___ you ___ (do) tonight?</p>
            <button 
              onClick={() => document.getElementById('answer-24')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-24" className="text-green-600 hidden">A: are you going to do</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-pink-600">Mixed Tense Practice</h2>
          <div className="space-y-2">
            <p className="font-medium">Q: I ___ (live) in Delhi since 2018.</p>
            <button 
              onClick={() => document.getElementById('answer-25')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-25" className="text-green-600 hidden">A: have lived</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: By this time next year, she ___ (complete) her degree.</p>
            <button 
              onClick={() => document.getElementById('answer-26')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-26" className="text-green-600 hidden">A: will have completed</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: They ___ (play) chess for two hours when I saw them.</p>
            <button 
              onClick={() => document.getElementById('answer-27')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-27" className="text-green-600 hidden">A: had been playing</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: He ___ (not/finish) the work yet.</p>
            <button 
              onClick={() => document.getElementById('answer-28')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-28" className="text-green-600 hidden">A: has not finished</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Q: What ___ you ___ (do) when the phone rang?</p>
            <button 
              onClick={() => document.getElementById('answer-29')?.classList.toggle('hidden')}
              className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors"
            >
              Check Answer
            </button>
            <p id="answer-29" className="text-green-600 hidden">A: were you doing</p>
          </div>
        </div>
      </div>
    </div>
  );
}