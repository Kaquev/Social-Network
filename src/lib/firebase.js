import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import {
  getFirestore,
  setDoc,
  doc,
  addDoc,
  collection,
  getDoc,
  getDocs,
  deleteDoc,
  query,
  orderBy,
  updateDoc,
  where,
} from 'firebase/firestore';

// configuracion incial de firebase
const firebaseConfig = {
  apiKey: 'AIzaSyACG5rW_-P4Y_Ut762pMUH4iKeMkxNAf2Q',
  authDomain: 'red-social-5d2b2.firebaseapp.com',
  projectId: 'red-social-5d2b2',
  storageBucket: 'red-social-5d2b2.appspot.com',
  messagingSenderId: '1053149612519',
  appId: '1:1053149612519:web:2ac9aa3caad8b07a4b5542',
  measurementId: 'G-K3Q4KXLZYX',
};

// inicio firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const db = getFirestore(app);

// Función para verificar si hay un usuario conectado
// eslint-disable-next-line no-unused-vars
const checkIfUserIsLoggedIn = (callback) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // Usuario conectado
      callback(user);
    } else {
      // Usuario desconectado
      callback(null);
    }
  });

  // Devuelve la función unsubscribe para detener la escucha cuando sea necesario
  return unsubscribe;
};

// Resto de tu código...

export const signInWithEmail = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    sessionStorage.setItem('userId', response.user.uid);
    sessionStorage.setItem('loggedEmail', email);
  } catch (error) {
    throw new Error(error);
  }
};
// funcion que ejecuta el login con google, muestra el pop up de gmail
export const singInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    sessionStorage.setItem('userId', response.user.uid);
    sessionStorage.setItem('loggedEmail', response.user.email);
    await setDoc(doc(db, 'users', response.user.uid), {
      name: response.user.displayName,
      email: response.user.email,
      origin: 'Google',
    });
    return {
      name: response.user.displayName,
      email: response.user.email,
      origin: 'Google',
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const createAccount = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await updateProfile(user, { displayName: name });
    await setDoc(doc(db, 'users', user.uid), {
      name,
      email,
      origin: 'Tripify',
    });
    return {
      name,
      email,
      origin: 'Tripify',
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const userSignOut = async () => {
  signOut(auth).then(() => {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('loggedEmail');
  }).catch((error) => {
    throw new Error(error);
  });
};

export const resetEmail = async (email) => sendPasswordResetEmail(auth, email);

export const newPost = async (userId, content) => {
  const name = auth.currentUser.displayName;
  const photo = auth.currentUser.photoURL;
  const postRef = collection(db, 'posts');
  await addDoc(postRef, {
    name,
    photo,
    userId,
    content,
    creationDate: new Date(),
  });
};

export const getPosts = async () => {
  const postRef = collection(db, 'posts');
  const q = query(postRef, orderBy('creationDate', 'desc'));
  const querySnapshot = await getDocs(q);
  const posts = [];
  querySnapshot.forEach((document) => {
    posts.push({ id: document.id, ...document.data() });
  });
  return posts;
};

export const getPost = async (idPost) => {
  const postRef = collection(db, 'posts');
  const q = query(postRef, where('id', '==', idPost));
  return getDocs(q);
};

export const updatePost = async (idPost, content) => {
  const postRef = doc(db, 'posts', idPost);
  await updateDoc(postRef, {
    content,
  });
};

// 1. Asegúrate de que los usuarios estén autenticados.
// Puedes hacerlo en tu código de autenticación de Firebase.

// 2. Cuando un usuario quiera eliminar un post:
export const deletePost = async (postId, userId) => {
  // Verificar si el usuario está autorizado para eliminar el post según las reglas de seguridad
  const postRef = doc(db, 'posts', postId);
  const postSnapshot = await getDoc(postRef);

  if (postSnapshot.exists() && postSnapshot.data().userId === userId) {
    // El usuario está autorizado para eliminar el post
    await deleteDoc(postRef);
    console.log('El post se ha eliminado correctamente.');
  } else {
    console.log('No tienes permiso para eliminar este post.');
  }
};

export const likePost = async (postId, userId, id) => {
  if (id === '') {
    const addLike = collection(db, 'likes');
    addDoc(addLike, {
      userId,
      postId,
    });
  } else {
    deleteDoc(doc(db, 'likes', id));
  }
};
export const getLikes = async () => {
  const likeRef = collection(db, 'likes');
  const q = query(likeRef, where('userId', '==', sessionStorage.getItem('userId')));
  const querySnapshot = await getDocs(q);
  const likes = [];
  querySnapshot.forEach((document) => {
    likes.push({ id: document.id, ...document.data() });
  });
  return likes;
};
