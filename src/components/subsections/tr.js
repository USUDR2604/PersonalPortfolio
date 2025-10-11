
.experience-item-list {
  counter-reset: li;
  padding: 1rem;
}
.experience-item-list > ul > li {
  position: relative;
}
.experience-item-list > ul > li::before {
  background: green;
  opacity: 0.95;
  content: "";
  position: absolute;
  top: 0;
  left: -15px;
  width: 10px;
  height: 100%;
}
.experience-item-list > ul {
  list-style: decimal;
  padding: 0 0 0 2rem;
  margin: 0;
}
.experience-item-list > ul > ul {
  margin: 0 0 0 1em;
}
.experience-item-list > ul > li {
  position: relative;
  display: block;
  padding: 0.5rem 0.5rem 1rem;
  margin: 0;
  color: #000;
  text-decoration: none;
  border-radius: 1em;
  transition: all 0.2s ease-in-out;
  line-height: 1.4em;
}

.experience-item-list > ul > li:hover {
  text-decoration: none;
}
.experience-item-list > ul > li:before {
  content: counter(li);
  counter-increment: li;
  position: absolute;
  z-index: 1;
  left: -3rem;
  top: 50%;
  transform: translateY(-50%);
  background: lightgreen;
  width: 2em;
  height: 2em;
  display: grid;
  place-content: center;
  line-height: 1;
  border: 2px solid green;
  text-align: center;
  font-weight: bold;
  border-radius: 100%;
  color: #000;
}

.experience-item-list > ul > li:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: -5px;
  left: -2.4rem;
  width: 1rem;
  background: lightgreen;
  z-index: 0;
}

.experience-item-list > ul > li:first-child:after {
  top: 50%;
}
.experience-item-list > ul > li:last-child:after {
  top: 0;
  bottom: 50%;
}
.experience-item-list > ul > li {
  background: #eee;
  margin-bottom: 5px;
}
.experience-item-list > ul > li:nth-child(odd) {
  background: #ccc;
}
