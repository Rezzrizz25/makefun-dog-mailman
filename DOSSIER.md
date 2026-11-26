# Dossier — The Dog Reviews the Mailman

- Bounty: `u-motasimfuad-the-dog-reviews-the-mailman-87608f85` — "The Dog Reviews the Mailman", $3.10, entries close 2026-11-26 23:55 +08.
- Bounty page: https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85
- Deliverable: `main.ts` (Node 22) writes one text to `/output/entry.txt`. Gate: UTF-8, 1–200 characters, not only whitespace.
- Judge: house AI judge, pairwise, weighed (in order) on subject, the dog's side of the visit (grievance/bribe/suspicion/triumph), dog voice, one tight line with a turn at the end, and specificity to this dog and this mailman.

## The entry (149 characters)

> Every day the mailman delivers the goods, then flees before I can finish my bark. 10/10 service, 0/10 courage — would guard this door again tomorrow.

## Revision history (genuinely new thinking each round)

1. **Draft 1:** "The mailman brings the goods, I bring the barking, and every day he runs away first. 10/10, would chase again."
   Kept: daily visit, he runs away first, a rating. Dropped because "would chase again" is generic review-speak and chasing implies leaving the yard — the triumph isn't anchored to the door the dog actually guards.
2. **Draft 2 (new angle — bribe/suspicion):** "He slips letters through my door like bribes and bolts before I can sniff his intentions. Five stars for the treats, one star for the cowardice."
   New thinking: the mailman as a suspicious stranger offering bribes through the slot. Dropped because the two star ratings fight each other and "treats" for letters is a stretch — the line spends its words explaining itself instead of landing.
3. **Final (new angle — grudge + triumph, one split rating):** "Every day the mailman delivers the goods, then flees before I can finish my bark. 10/10 service, 0/10 courage — would guard this door again tomorrow."
   New thinking: keep one rating but split it (service vs courage) so the turn is the joke itself; "before I can finish my bark" makes the dog the one in charge of the encounter and "guard this door again tomorrow" closes on the dog's job, not the mailman's. Dog vocabulary throughout (bark, guard, door), the visit is daily and specific, and the line is a complete one-liner at 149 characters.

## Local verification

- `node main.ts` writes `/output/entry.txt`; verified 149 characters, UTF-8, single line.
- Kit check: `node cli/makefun.mjs check --kit <kit> --repo <repo>` — run by the coordinator at submit time (needs the bundle/transcripts); pre-bundle `transcripts_present` is expected to fail.
