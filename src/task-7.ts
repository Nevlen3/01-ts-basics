const getMessage = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then(result => console.log(result));


/**
* ! Завдання:

* !  Додай до функції явну типізацію, яка вказує, що вона повертає проміс.
* !  Переконайся, що значення, з яким виконається проміс, – це рядок(string). 
*/
