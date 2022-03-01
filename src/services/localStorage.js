export const addData = data => {
  try {
    let dataFromLocalStorage = JSON.parse(localStorage.getItem('data'));
    let dataToLocalStorage = [];
    if (dataFromLocalStorage === null) {
      dataToLocalStorage = [data];
      localStorage.setItem('data', JSON.stringify(dataToLocalStorage));
    } else {
      dataToLocalStorage = [...dataFromLocalStorage, data];
      localStorage.setItem('data', JSON.stringify(dataToLocalStorage));
    }
  } catch (error) {
    localStorage.setItem('data', JSON.stringify(data));
    console.log(error);
  }
};

export const findNote = id => {
  try {
    let dataFromLocalStorage = JSON.parse(localStorage.getItem('data'));
    return dataFromLocalStorage.find(note => note.id === id);
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = id => {
  try {
    let dataFromLocalStorage = JSON.parse(localStorage.getItem('data'));
    let dataToLocalStorage = dataFromLocalStorage.filter(
      note => note.id !== id
    );
    localStorage.setItem('data', JSON.stringify(dataToLocalStorage));
  } catch (error) {
    console.log(error);
  }
};

export const changeStatus = (id, status) => {
  try {
    let dataFromLocalStorage = JSON.parse(localStorage.getItem('data'));
    let newNote = dataFromLocalStorage.find(note => note.id === id);
    newNote.status = status;
    let dataToLocalStorage = [
      ...dataFromLocalStorage.filter(note => note.id !== id),
      newNote,
    ];
    localStorage.setItem('data', JSON.stringify(dataToLocalStorage));
  } catch (error) {
    console.log(error);
  }
};

export const sortNotes = key => {
  try {
    let dataFromLocalStorage = JSON.parse(localStorage.getItem('data'));
    let dataToLocalStorage = dataFromLocalStorage.sort(
      (firstNote, secondNote) => firstNote[key].localeCompare(secondNote[key])
    );
    localStorage.setItem('data', JSON.stringify(dataToLocalStorage));
  } catch (error) {
    console.log(error);
  }
};
