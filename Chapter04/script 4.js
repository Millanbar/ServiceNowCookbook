// test for current �assignment to� field on incident form
if (!current.assigned_to.nil() && current.assigned_to.changes()) {
  // add email event in scheduler 
  gs.eventQueue("Take.Ownership", current, current.assigned_to.getDisplayValue(), previous.assigned_to.getDisplayValue());
}