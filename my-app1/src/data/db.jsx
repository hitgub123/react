
import axios from "axios";

export function getContacts() {
  return axios.get("http://localhost:3001/contacts");
}

export function getContact(id) {
  return axios.get("http://localhost:3001/contacts/"+id);
}

export function getTvs() {
  return axios.get("http://localhost:3001/tv");
}
