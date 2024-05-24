import { useState } from 'react';

const initialInput = {
  name: '',
  email: '',
  message: '',
};

type Input = 'name' | 'email' | 'message';

export const Contacts = () => {
  const [input, setInput] = useState(initialInput);
  const { name, email, message } = input;

  const isDisabled = !name.trim() || !email.trim() || !message.trim();

  const onInput = (e: React.ChangeEvent<HTMLInputElement>, type: Input) => {
    setInput((value) => ({ ...value, [type]: e.target.value }));
  };

  return (
    <section className="flex flex-col gap-32 mt-60">
      {/* Title */}
      <h1 className="font-main text-[12vw] huge:text-[125px] text-transparent text-center bg-clip-text bg-gradient-to-b from-secondary-light from-35% to-primary-light">
        Hit.me.up
      </h1>

      {/* TO BE REPLACED WITH MY WORK EMAIL */}
      <form
        action="https://formsubmit.co/mylittlespaceyf@gmail.com"
        method="POST"
        className="flex flex-col gap-[100px] xl:flex-row xl:justify-between items-center p-[120px] border-[5px] rounded-[50px] border-primary"
      >
        {/* Inputs - added some custom CSS to decrease the redundancy */}
        <div className="flex flex-col gap-28">
          <input
            type="text"
            name="name"
            onChange={(e) => onInput(e, 'name')}
            value={name}
            className="mb-4 font-secondary text-20 sm:text-32 text-text h-16 sm:h-20 py-4 w-[55vw] xl:w-[35vw] border-[none] border-b-[5px] bg-transparent placeholder:font-secondary placeholder:text-20 placeholder:opacity-70 sm:placeholder:text-32 placeholder:bg-clip-text placeholder:text-transparent placeholder:bg-gradient-to-r placeholder:from-accent-light placeholder:to-white placeholder:to-25% outline-0"
            placeholder="Enter your name"
            required
          />

          <input
            type="email"
            name="email"
            onChange={(e) => onInput(e, 'email')}
            value={email}
            className="mb-4 font-secondary text-20 sm:text-32 text-text h-16 sm:h-20 py-4 w-[55vw] xl:w-[35vw] border-[none] border-b-[5px] bg-transparent placeholder:font-secondary placeholder:text-20 placeholder:opacity-70 sm:placeholder:text-32 placeholder:bg-clip-text placeholder:text-transparent placeholder:bg-gradient-to-r placeholder:from-accent-light placeholder:to-white placeholder:to-25% outline-0"
            placeholder="Enter your email"
            required
          />

          <input
            type="text"
            name="message"
            onChange={(e) => onInput(e, 'message')}
            value={message}
            className="mb-4 font-secondary text-20 sm:text-32 text-text h-16 sm:h-20 py-4 w-[55vw] xl:w-[35vw] border-[none] border-b-[5px] bg-transparent placeholder:font-secondary placeholder:text-20 placeholder:opacity-70 sm:placeholder:text-32 placeholder:bg-clip-text placeholder:text-transparent placeholder:bg-gradient-to-r placeholder:from-accent-light placeholder:to-white placeholder:to-25% outline-0"
            placeholder="Enter your message"
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isDisabled}
          className="h-[30vw] w-[65vw] xl:h-[20vw] xl:w-[50vw] xl:rotate-90 bg-gradient-to-b from-accent to-secondary-light rounded-[50px] disabled:from-secondary-light disabled:to-accent-light transition-all duration-200 ease-in-out"
        />
      </form>
    </section>
  );
};
