const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');


const fetchuser = require('../middleware/fetchuser');
const Note = require('../Models/Note');

// ROUTE 1: fetching all notes
router.get('/fetchall', fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.userid });
    return res.status(200).json(notes);

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });

  }
})

// ROUTE 2: creating a new note 
const noteValidatorArr = [
  check('title').notEmpty().withMessage('Enter valid title!').bail(),
  check('description').notEmpty().isLength({ min: 5 }).withMessage('Minimum 5 characters required!').bail(),
  check('tag').notEmpty().withMessage('Tag cannot be empty')
]

router.post('/createnote', fetchuser, noteValidatorArr,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
      const { title, description, tag } = req.body;
      const userid = req.userid;
      const note = new Note({ title, description, tag, user: req.userid });
      const savedNote = await note.save();
      return res.json(savedNote);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

  })

router.put('/updatenote/:id', fetchuser, async (req, res) => {
  
  try {
    const { title, tag, description } = req.body;
    const newNote = {};
    if (title) newNote.title = title;
    if (tag) newNote.tag = tag;
    if (description) newNote.description = description;


    let note = await Note.findById(req.params.id);

    if (!note) return res.status(401).send('Note Not Found!');
    if (note.user.toString() !== req.userid) return res.status(401).send('Not Allowed');

    note = await Note.findByIdAndUpdate(req.params.id, newNote, { new: true });
    return res.json(note);
  }
  catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
})

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);

    if (!note) return res.status(401).send('Note Not Found!');
    if (note.user.toString() !== req.userid) return res.status(401).send('Not Allowed');

    note = await Note.findByIdAndDelete(req.params.id);
    return res.json({message: 'Delete Succesfull'});
  }
  catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
})


module.exports = router