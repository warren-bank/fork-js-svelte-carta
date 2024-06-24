import { s as scale, f as fade } from './index-C-FJF2Kj.js';
import { S as SvelteComponent, i as init, n as not_equal, a as empty$1, c as insert, t as transition_in, g as group_outros, f as transition_out, h as check_outros, j as detach, o as onMount, W as onDestroy, e as element, O as set_style, b as attr, X as action_destroyer, C as add_render_callback, Y as create_in_transition, Z as create_out_transition, E as destroy_each, F as text, d as append, l as listen, G as set_data, s as binding_callbacks } from './index-wUOa59Jt.js';
import { e as ensure_array_like } from './each-evIjbRfr.js';
import { c as commonjsGlobal, g as getDefaultExportFromCjs } from './_commonjsHelpers-CSOnQ4_A.js';

/**
 * @typedef Gemoji
 * @property {string} emoji
 *   Example: `'😀'`.
 * @property {Array<string>} names
 *   Example: `['grinning']`.
 * @property {Array<string>} tags
 *   Example: `['smile', 'happy']`.
 * @property {string} description
 *   Example: `'grinning face'`.
 * @property {string} category
 *   Example: `'Smileys & Emotion'`.
 */


/**
 * Map of names to emoji.
 *
 * @type {Record<string, string>}
 */
const nameToEmoji = {
  100: '💯',
  1234: '🔢',
  grinning: '😀',
  smiley: '😃',
  smile: '😄',
  grin: '😁',
  laughing: '😆',
  satisfied: '😆',
  sweat_smile: '😅',
  rofl: '🤣',
  joy: '😂',
  slightly_smiling_face: '🙂',
  upside_down_face: '🙃',
  melting_face: '🫠',
  wink: '😉',
  blush: '😊',
  innocent: '😇',
  smiling_face_with_three_hearts: '🥰',
  heart_eyes: '😍',
  star_struck: '🤩',
  kissing_heart: '😘',
  kissing: '😗',
  relaxed: '☺️',
  kissing_closed_eyes: '😚',
  kissing_smiling_eyes: '😙',
  smiling_face_with_tear: '🥲',
  yum: '😋',
  stuck_out_tongue: '😛',
  stuck_out_tongue_winking_eye: '😜',
  zany_face: '🤪',
  stuck_out_tongue_closed_eyes: '😝',
  money_mouth_face: '🤑',
  hugs: '🤗',
  hand_over_mouth: '🤭',
  face_with_open_eyes_and_hand_over_mouth: '🫢',
  face_with_peeking_eye: '🫣',
  shushing_face: '🤫',
  thinking: '🤔',
  saluting_face: '🫡',
  zipper_mouth_face: '🤐',
  raised_eyebrow: '🤨',
  neutral_face: '😐',
  expressionless: '😑',
  no_mouth: '😶',
  dotted_line_face: '🫥',
  face_in_clouds: '😶‍🌫️',
  smirk: '😏',
  unamused: '😒',
  roll_eyes: '🙄',
  grimacing: '😬',
  face_exhaling: '😮‍💨',
  lying_face: '🤥',
  shaking_face: '🫨',
  relieved: '😌',
  pensive: '😔',
  sleepy: '😪',
  drooling_face: '🤤',
  sleeping: '😴',
  mask: '😷',
  face_with_thermometer: '🤒',
  face_with_head_bandage: '🤕',
  nauseated_face: '🤢',
  vomiting_face: '🤮',
  sneezing_face: '🤧',
  hot_face: '🥵',
  cold_face: '🥶',
  woozy_face: '🥴',
  dizzy_face: '😵',
  face_with_spiral_eyes: '😵‍💫',
  exploding_head: '🤯',
  cowboy_hat_face: '🤠',
  partying_face: '🥳',
  disguised_face: '🥸',
  sunglasses: '😎',
  nerd_face: '🤓',
  monocle_face: '🧐',
  confused: '😕',
  face_with_diagonal_mouth: '🫤',
  worried: '😟',
  slightly_frowning_face: '🙁',
  frowning_face: '☹️',
  open_mouth: '😮',
  hushed: '😯',
  astonished: '😲',
  flushed: '😳',
  pleading_face: '🥺',
  face_holding_back_tears: '🥹',
  frowning: '😦',
  anguished: '😧',
  fearful: '😨',
  cold_sweat: '😰',
  disappointed_relieved: '😥',
  cry: '😢',
  sob: '😭',
  scream: '😱',
  confounded: '😖',
  persevere: '😣',
  disappointed: '😞',
  sweat: '😓',
  weary: '😩',
  tired_face: '😫',
  yawning_face: '🥱',
  triumph: '😤',
  rage: '😡',
  pout: '😡',
  angry: '😠',
  cursing_face: '🤬',
  smiling_imp: '😈',
  imp: '👿',
  skull: '💀',
  skull_and_crossbones: '☠️',
  hankey: '💩',
  poop: '💩',
  shit: '💩',
  clown_face: '🤡',
  japanese_ogre: '👹',
  japanese_goblin: '👺',
  ghost: '👻',
  alien: '👽',
  space_invader: '👾',
  robot: '🤖',
  smiley_cat: '😺',
  smile_cat: '😸',
  joy_cat: '😹',
  heart_eyes_cat: '😻',
  smirk_cat: '😼',
  kissing_cat: '😽',
  scream_cat: '🙀',
  crying_cat_face: '😿',
  pouting_cat: '😾',
  see_no_evil: '🙈',
  hear_no_evil: '🙉',
  speak_no_evil: '🙊',
  love_letter: '💌',
  cupid: '💘',
  gift_heart: '💝',
  sparkling_heart: '💖',
  heartpulse: '💗',
  heartbeat: '💓',
  revolving_hearts: '💞',
  two_hearts: '💕',
  heart_decoration: '💟',
  heavy_heart_exclamation: '❣️',
  broken_heart: '💔',
  heart_on_fire: '❤️‍🔥',
  mending_heart: '❤️‍🩹',
  heart: '❤️',
  pink_heart: '🩷',
  orange_heart: '🧡',
  yellow_heart: '💛',
  green_heart: '💚',
  blue_heart: '💙',
  light_blue_heart: '🩵',
  purple_heart: '💜',
  brown_heart: '🤎',
  black_heart: '🖤',
  grey_heart: '🩶',
  white_heart: '🤍',
  kiss: '💋',
  anger: '💢',
  boom: '💥',
  collision: '💥',
  dizzy: '💫',
  sweat_drops: '💦',
  dash: '💨',
  hole: '🕳️',
  speech_balloon: '💬',
  eye_speech_bubble: '👁️‍🗨️',
  left_speech_bubble: '🗨️',
  right_anger_bubble: '🗯️',
  thought_balloon: '💭',
  zzz: '💤',
  wave: '👋',
  raised_back_of_hand: '🤚',
  raised_hand_with_fingers_splayed: '🖐️',
  hand: '✋',
  raised_hand: '✋',
  vulcan_salute: '🖖',
  rightwards_hand: '🫱',
  leftwards_hand: '🫲',
  palm_down_hand: '🫳',
  palm_up_hand: '🫴',
  leftwards_pushing_hand: '🫷',
  rightwards_pushing_hand: '🫸',
  ok_hand: '👌',
  pinched_fingers: '🤌',
  pinching_hand: '🤏',
  v: '✌️',
  crossed_fingers: '🤞',
  hand_with_index_finger_and_thumb_crossed: '🫰',
  love_you_gesture: '🤟',
  metal: '🤘',
  call_me_hand: '🤙',
  point_left: '👈',
  point_right: '👉',
  point_up_2: '👆',
  middle_finger: '🖕',
  fu: '🖕',
  point_down: '👇',
  point_up: '☝️',
  index_pointing_at_the_viewer: '🫵',
  '+1': '👍',
  thumbsup: '👍',
  '-1': '👎',
  thumbsdown: '👎',
  fist_raised: '✊',
  fist: '✊',
  fist_oncoming: '👊',
  facepunch: '👊',
  punch: '👊',
  fist_left: '🤛',
  fist_right: '🤜',
  clap: '👏',
  raised_hands: '🙌',
  heart_hands: '🫶',
  open_hands: '👐',
  palms_up_together: '🤲',
  handshake: '🤝',
  pray: '🙏',
  writing_hand: '✍️',
  nail_care: '💅',
  selfie: '🤳',
  muscle: '💪',
  mechanical_arm: '🦾',
  mechanical_leg: '🦿',
  leg: '🦵',
  foot: '🦶',
  ear: '👂',
  ear_with_hearing_aid: '🦻',
  nose: '👃',
  brain: '🧠',
  anatomical_heart: '🫀',
  lungs: '🫁',
  tooth: '🦷',
  bone: '🦴',
  eyes: '👀',
  eye: '👁️',
  tongue: '👅',
  lips: '👄',
  biting_lip: '🫦',
  baby: '👶',
  child: '🧒',
  boy: '👦',
  girl: '👧',
  adult: '🧑',
  blond_haired_person: '👱',
  man: '👨',
  bearded_person: '🧔',
  man_beard: '🧔‍♂️',
  woman_beard: '🧔‍♀️',
  red_haired_man: '👨‍🦰',
  curly_haired_man: '👨‍🦱',
  white_haired_man: '👨‍🦳',
  bald_man: '👨‍🦲',
  woman: '👩',
  red_haired_woman: '👩‍🦰',
  person_red_hair: '🧑‍🦰',
  curly_haired_woman: '👩‍🦱',
  person_curly_hair: '🧑‍🦱',
  white_haired_woman: '👩‍🦳',
  person_white_hair: '🧑‍🦳',
  bald_woman: '👩‍🦲',
  person_bald: '🧑‍🦲',
  blond_haired_woman: '👱‍♀️',
  blonde_woman: '👱‍♀️',
  blond_haired_man: '👱‍♂️',
  older_adult: '🧓',
  older_man: '👴',
  older_woman: '👵',
  frowning_person: '🙍',
  frowning_man: '🙍‍♂️',
  frowning_woman: '🙍‍♀️',
  pouting_face: '🙎',
  pouting_man: '🙎‍♂️',
  pouting_woman: '🙎‍♀️',
  no_good: '🙅',
  no_good_man: '🙅‍♂️',
  ng_man: '🙅‍♂️',
  no_good_woman: '🙅‍♀️',
  ng_woman: '🙅‍♀️',
  ok_person: '🙆',
  ok_man: '🙆‍♂️',
  ok_woman: '🙆‍♀️',
  tipping_hand_person: '💁',
  information_desk_person: '💁',
  tipping_hand_man: '💁‍♂️',
  sassy_man: '💁‍♂️',
  tipping_hand_woman: '💁‍♀️',
  sassy_woman: '💁‍♀️',
  raising_hand: '🙋',
  raising_hand_man: '🙋‍♂️',
  raising_hand_woman: '🙋‍♀️',
  deaf_person: '🧏',
  deaf_man: '🧏‍♂️',
  deaf_woman: '🧏‍♀️',
  bow: '🙇',
  bowing_man: '🙇‍♂️',
  bowing_woman: '🙇‍♀️',
  facepalm: '🤦',
  man_facepalming: '🤦‍♂️',
  woman_facepalming: '🤦‍♀️',
  shrug: '🤷',
  man_shrugging: '🤷‍♂️',
  woman_shrugging: '🤷‍♀️',
  health_worker: '🧑‍⚕️',
  man_health_worker: '👨‍⚕️',
  woman_health_worker: '👩‍⚕️',
  student: '🧑‍🎓',
  man_student: '👨‍🎓',
  woman_student: '👩‍🎓',
  teacher: '🧑‍🏫',
  man_teacher: '👨‍🏫',
  woman_teacher: '👩‍🏫',
  judge: '🧑‍⚖️',
  man_judge: '👨‍⚖️',
  woman_judge: '👩‍⚖️',
  farmer: '🧑‍🌾',
  man_farmer: '👨‍🌾',
  woman_farmer: '👩‍🌾',
  cook: '🧑‍🍳',
  man_cook: '👨‍🍳',
  woman_cook: '👩‍🍳',
  mechanic: '🧑‍🔧',
  man_mechanic: '👨‍🔧',
  woman_mechanic: '👩‍🔧',
  factory_worker: '🧑‍🏭',
  man_factory_worker: '👨‍🏭',
  woman_factory_worker: '👩‍🏭',
  office_worker: '🧑‍💼',
  man_office_worker: '👨‍💼',
  woman_office_worker: '👩‍💼',
  scientist: '🧑‍🔬',
  man_scientist: '👨‍🔬',
  woman_scientist: '👩‍🔬',
  technologist: '🧑‍💻',
  man_technologist: '👨‍💻',
  woman_technologist: '👩‍💻',
  singer: '🧑‍🎤',
  man_singer: '👨‍🎤',
  woman_singer: '👩‍🎤',
  artist: '🧑‍🎨',
  man_artist: '👨‍🎨',
  woman_artist: '👩‍🎨',
  pilot: '🧑‍✈️',
  man_pilot: '👨‍✈️',
  woman_pilot: '👩‍✈️',
  astronaut: '🧑‍🚀',
  man_astronaut: '👨‍🚀',
  woman_astronaut: '👩‍🚀',
  firefighter: '🧑‍🚒',
  man_firefighter: '👨‍🚒',
  woman_firefighter: '👩‍🚒',
  police_officer: '👮',
  cop: '👮',
  policeman: '👮‍♂️',
  policewoman: '👮‍♀️',
  detective: '🕵️',
  male_detective: '🕵️‍♂️',
  female_detective: '🕵️‍♀️',
  guard: '💂',
  guardsman: '💂‍♂️',
  guardswoman: '💂‍♀️',
  ninja: '🥷',
  construction_worker: '👷',
  construction_worker_man: '👷‍♂️',
  construction_worker_woman: '👷‍♀️',
  person_with_crown: '🫅',
  prince: '🤴',
  princess: '👸',
  person_with_turban: '👳',
  man_with_turban: '👳‍♂️',
  woman_with_turban: '👳‍♀️',
  man_with_gua_pi_mao: '👲',
  woman_with_headscarf: '🧕',
  person_in_tuxedo: '🤵',
  man_in_tuxedo: '🤵‍♂️',
  woman_in_tuxedo: '🤵‍♀️',
  person_with_veil: '👰',
  man_with_veil: '👰‍♂️',
  woman_with_veil: '👰‍♀️',
  bride_with_veil: '👰‍♀️',
  pregnant_woman: '🤰',
  pregnant_man: '🫃',
  pregnant_person: '🫄',
  breast_feeding: '🤱',
  woman_feeding_baby: '👩‍🍼',
  man_feeding_baby: '👨‍🍼',
  person_feeding_baby: '🧑‍🍼',
  angel: '👼',
  santa: '🎅',
  mrs_claus: '🤶',
  mx_claus: '🧑‍🎄',
  superhero: '🦸',
  superhero_man: '🦸‍♂️',
  superhero_woman: '🦸‍♀️',
  supervillain: '🦹',
  supervillain_man: '🦹‍♂️',
  supervillain_woman: '🦹‍♀️',
  mage: '🧙',
  mage_man: '🧙‍♂️',
  mage_woman: '🧙‍♀️',
  fairy: '🧚',
  fairy_man: '🧚‍♂️',
  fairy_woman: '🧚‍♀️',
  vampire: '🧛',
  vampire_man: '🧛‍♂️',
  vampire_woman: '🧛‍♀️',
  merperson: '🧜',
  merman: '🧜‍♂️',
  mermaid: '🧜‍♀️',
  elf: '🧝',
  elf_man: '🧝‍♂️',
  elf_woman: '🧝‍♀️',
  genie: '🧞',
  genie_man: '🧞‍♂️',
  genie_woman: '🧞‍♀️',
  zombie: '🧟',
  zombie_man: '🧟‍♂️',
  zombie_woman: '🧟‍♀️',
  troll: '🧌',
  massage: '💆',
  massage_man: '💆‍♂️',
  massage_woman: '💆‍♀️',
  haircut: '💇',
  haircut_man: '💇‍♂️',
  haircut_woman: '💇‍♀️',
  walking: '🚶',
  walking_man: '🚶‍♂️',
  walking_woman: '🚶‍♀️',
  standing_person: '🧍',
  standing_man: '🧍‍♂️',
  standing_woman: '🧍‍♀️',
  kneeling_person: '🧎',
  kneeling_man: '🧎‍♂️',
  kneeling_woman: '🧎‍♀️',
  person_with_probing_cane: '🧑‍🦯',
  man_with_probing_cane: '👨‍🦯',
  woman_with_probing_cane: '👩‍🦯',
  person_in_motorized_wheelchair: '🧑‍🦼',
  man_in_motorized_wheelchair: '👨‍🦼',
  woman_in_motorized_wheelchair: '👩‍🦼',
  person_in_manual_wheelchair: '🧑‍🦽',
  man_in_manual_wheelchair: '👨‍🦽',
  woman_in_manual_wheelchair: '👩‍🦽',
  runner: '🏃',
  running: '🏃',
  running_man: '🏃‍♂️',
  running_woman: '🏃‍♀️',
  woman_dancing: '💃',
  dancer: '💃',
  man_dancing: '🕺',
  business_suit_levitating: '🕴️',
  dancers: '👯',
  dancing_men: '👯‍♂️',
  dancing_women: '👯‍♀️',
  sauna_person: '🧖',
  sauna_man: '🧖‍♂️',
  sauna_woman: '🧖‍♀️',
  climbing: '🧗',
  climbing_man: '🧗‍♂️',
  climbing_woman: '🧗‍♀️',
  person_fencing: '🤺',
  horse_racing: '🏇',
  skier: '⛷️',
  snowboarder: '🏂',
  golfing: '🏌️',
  golfing_man: '🏌️‍♂️',
  golfing_woman: '🏌️‍♀️',
  surfer: '🏄',
  surfing_man: '🏄‍♂️',
  surfing_woman: '🏄‍♀️',
  rowboat: '🚣',
  rowing_man: '🚣‍♂️',
  rowing_woman: '🚣‍♀️',
  swimmer: '🏊',
  swimming_man: '🏊‍♂️',
  swimming_woman: '🏊‍♀️',
  bouncing_ball_person: '⛹️',
  bouncing_ball_man: '⛹️‍♂️',
  basketball_man: '⛹️‍♂️',
  bouncing_ball_woman: '⛹️‍♀️',
  basketball_woman: '⛹️‍♀️',
  weight_lifting: '🏋️',
  weight_lifting_man: '🏋️‍♂️',
  weight_lifting_woman: '🏋️‍♀️',
  bicyclist: '🚴',
  biking_man: '🚴‍♂️',
  biking_woman: '🚴‍♀️',
  mountain_bicyclist: '🚵',
  mountain_biking_man: '🚵‍♂️',
  mountain_biking_woman: '🚵‍♀️',
  cartwheeling: '🤸',
  man_cartwheeling: '🤸‍♂️',
  woman_cartwheeling: '🤸‍♀️',
  wrestling: '🤼',
  men_wrestling: '🤼‍♂️',
  women_wrestling: '🤼‍♀️',
  water_polo: '🤽',
  man_playing_water_polo: '🤽‍♂️',
  woman_playing_water_polo: '🤽‍♀️',
  handball_person: '🤾',
  man_playing_handball: '🤾‍♂️',
  woman_playing_handball: '🤾‍♀️',
  juggling_person: '🤹',
  man_juggling: '🤹‍♂️',
  woman_juggling: '🤹‍♀️',
  lotus_position: '🧘',
  lotus_position_man: '🧘‍♂️',
  lotus_position_woman: '🧘‍♀️',
  bath: '🛀',
  sleeping_bed: '🛌',
  people_holding_hands: '🧑‍🤝‍🧑',
  two_women_holding_hands: '👭',
  couple: '👫',
  two_men_holding_hands: '👬',
  couplekiss: '💏',
  couplekiss_man_woman: '👩‍❤️‍💋‍👨',
  couplekiss_man_man: '👨‍❤️‍💋‍👨',
  couplekiss_woman_woman: '👩‍❤️‍💋‍👩',
  couple_with_heart: '💑',
  couple_with_heart_woman_man: '👩‍❤️‍👨',
  couple_with_heart_man_man: '👨‍❤️‍👨',
  couple_with_heart_woman_woman: '👩‍❤️‍👩',
  family: '👪',
  family_man_woman_boy: '👨‍👩‍👦',
  family_man_woman_girl: '👨‍👩‍👧',
  family_man_woman_girl_boy: '👨‍👩‍👧‍👦',
  family_man_woman_boy_boy: '👨‍👩‍👦‍👦',
  family_man_woman_girl_girl: '👨‍👩‍👧‍👧',
  family_man_man_boy: '👨‍👨‍👦',
  family_man_man_girl: '👨‍👨‍👧',
  family_man_man_girl_boy: '👨‍👨‍👧‍👦',
  family_man_man_boy_boy: '👨‍👨‍👦‍👦',
  family_man_man_girl_girl: '👨‍👨‍👧‍👧',
  family_woman_woman_boy: '👩‍👩‍👦',
  family_woman_woman_girl: '👩‍👩‍👧',
  family_woman_woman_girl_boy: '👩‍👩‍👧‍👦',
  family_woman_woman_boy_boy: '👩‍👩‍👦‍👦',
  family_woman_woman_girl_girl: '👩‍👩‍👧‍👧',
  family_man_boy: '👨‍👦',
  family_man_boy_boy: '👨‍👦‍👦',
  family_man_girl: '👨‍👧',
  family_man_girl_boy: '👨‍👧‍👦',
  family_man_girl_girl: '👨‍👧‍👧',
  family_woman_boy: '👩‍👦',
  family_woman_boy_boy: '👩‍👦‍👦',
  family_woman_girl: '👩‍👧',
  family_woman_girl_boy: '👩‍👧‍👦',
  family_woman_girl_girl: '👩‍👧‍👧',
  speaking_head: '🗣️',
  bust_in_silhouette: '👤',
  busts_in_silhouette: '👥',
  people_hugging: '🫂',
  footprints: '👣',
  monkey_face: '🐵',
  monkey: '🐒',
  gorilla: '🦍',
  orangutan: '🦧',
  dog: '🐶',
  dog2: '🐕',
  guide_dog: '🦮',
  service_dog: '🐕‍🦺',
  poodle: '🐩',
  wolf: '🐺',
  fox_face: '🦊',
  raccoon: '🦝',
  cat: '🐱',
  cat2: '🐈',
  black_cat: '🐈‍⬛',
  lion: '🦁',
  tiger: '🐯',
  tiger2: '🐅',
  leopard: '🐆',
  horse: '🐴',
  moose: '🫎',
  donkey: '🫏',
  racehorse: '🐎',
  unicorn: '🦄',
  zebra: '🦓',
  deer: '🦌',
  bison: '🦬',
  cow: '🐮',
  ox: '🐂',
  water_buffalo: '🐃',
  cow2: '🐄',
  pig: '🐷',
  pig2: '🐖',
  boar: '🐗',
  pig_nose: '🐽',
  ram: '🐏',
  sheep: '🐑',
  goat: '🐐',
  dromedary_camel: '🐪',
  camel: '🐫',
  llama: '🦙',
  giraffe: '🦒',
  elephant: '🐘',
  mammoth: '🦣',
  rhinoceros: '🦏',
  hippopotamus: '🦛',
  mouse: '🐭',
  mouse2: '🐁',
  rat: '🐀',
  hamster: '🐹',
  rabbit: '🐰',
  rabbit2: '🐇',
  chipmunk: '🐿️',
  beaver: '🦫',
  hedgehog: '🦔',
  bat: '🦇',
  bear: '🐻',
  polar_bear: '🐻‍❄️',
  koala: '🐨',
  panda_face: '🐼',
  sloth: '🦥',
  otter: '🦦',
  skunk: '🦨',
  kangaroo: '🦘',
  badger: '🦡',
  feet: '🐾',
  paw_prints: '🐾',
  turkey: '🦃',
  chicken: '🐔',
  rooster: '🐓',
  hatching_chick: '🐣',
  baby_chick: '🐤',
  hatched_chick: '🐥',
  bird: '🐦',
  penguin: '🐧',
  dove: '🕊️',
  eagle: '🦅',
  duck: '🦆',
  swan: '🦢',
  owl: '🦉',
  dodo: '🦤',
  feather: '🪶',
  flamingo: '🦩',
  peacock: '🦚',
  parrot: '🦜',
  wing: '🪽',
  black_bird: '🐦‍⬛',
  goose: '🪿',
  frog: '🐸',
  crocodile: '🐊',
  turtle: '🐢',
  lizard: '🦎',
  snake: '🐍',
  dragon_face: '🐲',
  dragon: '🐉',
  sauropod: '🦕',
  't-rex': '🦖',
  whale: '🐳',
  whale2: '🐋',
  dolphin: '🐬',
  flipper: '🐬',
  seal: '🦭',
  fish: '🐟',
  tropical_fish: '🐠',
  blowfish: '🐡',
  shark: '🦈',
  octopus: '🐙',
  shell: '🐚',
  coral: '🪸',
  jellyfish: '🪼',
  snail: '🐌',
  butterfly: '🦋',
  bug: '🐛',
  ant: '🐜',
  bee: '🐝',
  honeybee: '🐝',
  beetle: '🪲',
  lady_beetle: '🐞',
  cricket: '🦗',
  cockroach: '🪳',
  spider: '🕷️',
  spider_web: '🕸️',
  scorpion: '🦂',
  mosquito: '🦟',
  fly: '🪰',
  worm: '🪱',
  microbe: '🦠',
  bouquet: '💐',
  cherry_blossom: '🌸',
  white_flower: '💮',
  lotus: '🪷',
  rosette: '🏵️',
  rose: '🌹',
  wilted_flower: '🥀',
  hibiscus: '🌺',
  sunflower: '🌻',
  blossom: '🌼',
  tulip: '🌷',
  hyacinth: '🪻',
  seedling: '🌱',
  potted_plant: '🪴',
  evergreen_tree: '🌲',
  deciduous_tree: '🌳',
  palm_tree: '🌴',
  cactus: '🌵',
  ear_of_rice: '🌾',
  herb: '🌿',
  shamrock: '☘️',
  four_leaf_clover: '🍀',
  maple_leaf: '🍁',
  fallen_leaf: '🍂',
  leaves: '🍃',
  empty_nest: '🪹',
  nest_with_eggs: '🪺',
  mushroom: '🍄',
  grapes: '🍇',
  melon: '🍈',
  watermelon: '🍉',
  tangerine: '🍊',
  orange: '🍊',
  mandarin: '🍊',
  lemon: '🍋',
  banana: '🍌',
  pineapple: '🍍',
  mango: '🥭',
  apple: '🍎',
  green_apple: '🍏',
  pear: '🍐',
  peach: '🍑',
  cherries: '🍒',
  strawberry: '🍓',
  blueberries: '🫐',
  kiwi_fruit: '🥝',
  tomato: '🍅',
  olive: '🫒',
  coconut: '🥥',
  avocado: '🥑',
  eggplant: '🍆',
  potato: '🥔',
  carrot: '🥕',
  corn: '🌽',
  hot_pepper: '🌶️',
  bell_pepper: '🫑',
  cucumber: '🥒',
  leafy_green: '🥬',
  broccoli: '🥦',
  garlic: '🧄',
  onion: '🧅',
  peanuts: '🥜',
  beans: '🫘',
  chestnut: '🌰',
  ginger_root: '🫚',
  pea_pod: '🫛',
  bread: '🍞',
  croissant: '🥐',
  baguette_bread: '🥖',
  flatbread: '🫓',
  pretzel: '🥨',
  bagel: '🥯',
  pancakes: '🥞',
  waffle: '🧇',
  cheese: '🧀',
  meat_on_bone: '🍖',
  poultry_leg: '🍗',
  cut_of_meat: '🥩',
  bacon: '🥓',
  hamburger: '🍔',
  fries: '🍟',
  pizza: '🍕',
  hotdog: '🌭',
  sandwich: '🥪',
  taco: '🌮',
  burrito: '🌯',
  tamale: '🫔',
  stuffed_flatbread: '🥙',
  falafel: '🧆',
  egg: '🥚',
  fried_egg: '🍳',
  shallow_pan_of_food: '🥘',
  stew: '🍲',
  fondue: '🫕',
  bowl_with_spoon: '🥣',
  green_salad: '🥗',
  popcorn: '🍿',
  butter: '🧈',
  salt: '🧂',
  canned_food: '🥫',
  bento: '🍱',
  rice_cracker: '🍘',
  rice_ball: '🍙',
  rice: '🍚',
  curry: '🍛',
  ramen: '🍜',
  spaghetti: '🍝',
  sweet_potato: '🍠',
  oden: '🍢',
  sushi: '🍣',
  fried_shrimp: '🍤',
  fish_cake: '🍥',
  moon_cake: '🥮',
  dango: '🍡',
  dumpling: '🥟',
  fortune_cookie: '🥠',
  takeout_box: '🥡',
  crab: '🦀',
  lobster: '🦞',
  shrimp: '🦐',
  squid: '🦑',
  oyster: '🦪',
  icecream: '🍦',
  shaved_ice: '🍧',
  ice_cream: '🍨',
  doughnut: '🍩',
  cookie: '🍪',
  birthday: '🎂',
  cake: '🍰',
  cupcake: '🧁',
  pie: '🥧',
  chocolate_bar: '🍫',
  candy: '🍬',
  lollipop: '🍭',
  custard: '🍮',
  honey_pot: '🍯',
  baby_bottle: '🍼',
  milk_glass: '🥛',
  coffee: '☕',
  teapot: '🫖',
  tea: '🍵',
  sake: '🍶',
  champagne: '🍾',
  wine_glass: '🍷',
  cocktail: '🍸',
  tropical_drink: '🍹',
  beer: '🍺',
  beers: '🍻',
  clinking_glasses: '🥂',
  tumbler_glass: '🥃',
  pouring_liquid: '🫗',
  cup_with_straw: '🥤',
  bubble_tea: '🧋',
  beverage_box: '🧃',
  mate: '🧉',
  ice_cube: '🧊',
  chopsticks: '🥢',
  plate_with_cutlery: '🍽️',
  fork_and_knife: '🍴',
  spoon: '🥄',
  hocho: '🔪',
  knife: '🔪',
  jar: '🫙',
  amphora: '🏺',
  earth_africa: '🌍',
  earth_americas: '🌎',
  earth_asia: '🌏',
  globe_with_meridians: '🌐',
  world_map: '🗺️',
  japan: '🗾',
  compass: '🧭',
  mountain_snow: '🏔️',
  mountain: '⛰️',
  volcano: '🌋',
  mount_fuji: '🗻',
  camping: '🏕️',
  beach_umbrella: '🏖️',
  desert: '🏜️',
  desert_island: '🏝️',
  national_park: '🏞️',
  stadium: '🏟️',
  classical_building: '🏛️',
  building_construction: '🏗️',
  bricks: '🧱',
  rock: '🪨',
  wood: '🪵',
  hut: '🛖',
  houses: '🏘️',
  derelict_house: '🏚️',
  house: '🏠',
  house_with_garden: '🏡',
  office: '🏢',
  post_office: '🏣',
  european_post_office: '🏤',
  hospital: '🏥',
  bank: '🏦',
  hotel: '🏨',
  love_hotel: '🏩',
  convenience_store: '🏪',
  school: '🏫',
  department_store: '🏬',
  factory: '🏭',
  japanese_castle: '🏯',
  european_castle: '🏰',
  wedding: '💒',
  tokyo_tower: '🗼',
  statue_of_liberty: '🗽',
  church: '⛪',
  mosque: '🕌',
  hindu_temple: '🛕',
  synagogue: '🕍',
  shinto_shrine: '⛩️',
  kaaba: '🕋',
  fountain: '⛲',
  tent: '⛺',
  foggy: '🌁',
  night_with_stars: '🌃',
  cityscape: '🏙️',
  sunrise_over_mountains: '🌄',
  sunrise: '🌅',
  city_sunset: '🌆',
  city_sunrise: '🌇',
  bridge_at_night: '🌉',
  hotsprings: '♨️',
  carousel_horse: '🎠',
  playground_slide: '🛝',
  ferris_wheel: '🎡',
  roller_coaster: '🎢',
  barber: '💈',
  circus_tent: '🎪',
  steam_locomotive: '🚂',
  railway_car: '🚃',
  bullettrain_side: '🚄',
  bullettrain_front: '🚅',
  train2: '🚆',
  metro: '🚇',
  light_rail: '🚈',
  station: '🚉',
  tram: '🚊',
  monorail: '🚝',
  mountain_railway: '🚞',
  train: '🚋',
  bus: '🚌',
  oncoming_bus: '🚍',
  trolleybus: '🚎',
  minibus: '🚐',
  ambulance: '🚑',
  fire_engine: '🚒',
  police_car: '🚓',
  oncoming_police_car: '🚔',
  taxi: '🚕',
  oncoming_taxi: '🚖',
  car: '🚗',
  red_car: '🚗',
  oncoming_automobile: '🚘',
  blue_car: '🚙',
  pickup_truck: '🛻',
  truck: '🚚',
  articulated_lorry: '🚛',
  tractor: '🚜',
  racing_car: '🏎️',
  motorcycle: '🏍️',
  motor_scooter: '🛵',
  manual_wheelchair: '🦽',
  motorized_wheelchair: '🦼',
  auto_rickshaw: '🛺',
  bike: '🚲',
  kick_scooter: '🛴',
  skateboard: '🛹',
  roller_skate: '🛼',
  busstop: '🚏',
  motorway: '🛣️',
  railway_track: '🛤️',
  oil_drum: '🛢️',
  fuelpump: '⛽',
  wheel: '🛞',
  rotating_light: '🚨',
  traffic_light: '🚥',
  vertical_traffic_light: '🚦',
  stop_sign: '🛑',
  construction: '🚧',
  anchor: '⚓',
  ring_buoy: '🛟',
  boat: '⛵',
  sailboat: '⛵',
  canoe: '🛶',
  speedboat: '🚤',
  passenger_ship: '🛳️',
  ferry: '⛴️',
  motor_boat: '🛥️',
  ship: '🚢',
  airplane: '✈️',
  small_airplane: '🛩️',
  flight_departure: '🛫',
  flight_arrival: '🛬',
  parachute: '🪂',
  seat: '💺',
  helicopter: '🚁',
  suspension_railway: '🚟',
  mountain_cableway: '🚠',
  aerial_tramway: '🚡',
  artificial_satellite: '🛰️',
  rocket: '🚀',
  flying_saucer: '🛸',
  bellhop_bell: '🛎️',
  luggage: '🧳',
  hourglass: '⌛',
  hourglass_flowing_sand: '⏳',
  watch: '⌚',
  alarm_clock: '⏰',
  stopwatch: '⏱️',
  timer_clock: '⏲️',
  mantelpiece_clock: '🕰️',
  clock12: '🕛',
  clock1230: '🕧',
  clock1: '🕐',
  clock130: '🕜',
  clock2: '🕑',
  clock230: '🕝',
  clock3: '🕒',
  clock330: '🕞',
  clock4: '🕓',
  clock430: '🕟',
  clock5: '🕔',
  clock530: '🕠',
  clock6: '🕕',
  clock630: '🕡',
  clock7: '🕖',
  clock730: '🕢',
  clock8: '🕗',
  clock830: '🕣',
  clock9: '🕘',
  clock930: '🕤',
  clock10: '🕙',
  clock1030: '🕥',
  clock11: '🕚',
  clock1130: '🕦',
  new_moon: '🌑',
  waxing_crescent_moon: '🌒',
  first_quarter_moon: '🌓',
  moon: '🌔',
  waxing_gibbous_moon: '🌔',
  full_moon: '🌕',
  waning_gibbous_moon: '🌖',
  last_quarter_moon: '🌗',
  waning_crescent_moon: '🌘',
  crescent_moon: '🌙',
  new_moon_with_face: '🌚',
  first_quarter_moon_with_face: '🌛',
  last_quarter_moon_with_face: '🌜',
  thermometer: '🌡️',
  sunny: '☀️',
  full_moon_with_face: '🌝',
  sun_with_face: '🌞',
  ringed_planet: '🪐',
  star: '⭐',
  star2: '🌟',
  stars: '🌠',
  milky_way: '🌌',
  cloud: '☁️',
  partly_sunny: '⛅',
  cloud_with_lightning_and_rain: '⛈️',
  sun_behind_small_cloud: '🌤️',
  sun_behind_large_cloud: '🌥️',
  sun_behind_rain_cloud: '🌦️',
  cloud_with_rain: '🌧️',
  cloud_with_snow: '🌨️',
  cloud_with_lightning: '🌩️',
  tornado: '🌪️',
  fog: '🌫️',
  wind_face: '🌬️',
  cyclone: '🌀',
  rainbow: '🌈',
  closed_umbrella: '🌂',
  open_umbrella: '☂️',
  umbrella: '☔',
  parasol_on_ground: '⛱️',
  zap: '⚡',
  snowflake: '❄️',
  snowman_with_snow: '☃️',
  snowman: '⛄',
  comet: '☄️',
  fire: '🔥',
  droplet: '💧',
  ocean: '🌊',
  jack_o_lantern: '🎃',
  christmas_tree: '🎄',
  fireworks: '🎆',
  sparkler: '🎇',
  firecracker: '🧨',
  sparkles: '✨',
  balloon: '🎈',
  tada: '🎉',
  confetti_ball: '🎊',
  tanabata_tree: '🎋',
  bamboo: '🎍',
  dolls: '🎎',
  flags: '🎏',
  wind_chime: '🎐',
  rice_scene: '🎑',
  red_envelope: '🧧',
  ribbon: '🎀',
  gift: '🎁',
  reminder_ribbon: '🎗️',
  tickets: '🎟️',
  ticket: '🎫',
  medal_military: '🎖️',
  trophy: '🏆',
  medal_sports: '🏅',
  '1st_place_medal': '🥇',
  '2nd_place_medal': '🥈',
  '3rd_place_medal': '🥉',
  soccer: '⚽',
  baseball: '⚾',
  softball: '🥎',
  basketball: '🏀',
  volleyball: '🏐',
  football: '🏈',
  rugby_football: '🏉',
  tennis: '🎾',
  flying_disc: '🥏',
  bowling: '🎳',
  cricket_game: '🏏',
  field_hockey: '🏑',
  ice_hockey: '🏒',
  lacrosse: '🥍',
  ping_pong: '🏓',
  badminton: '🏸',
  boxing_glove: '🥊',
  martial_arts_uniform: '🥋',
  goal_net: '🥅',
  golf: '⛳',
  ice_skate: '⛸️',
  fishing_pole_and_fish: '🎣',
  diving_mask: '🤿',
  running_shirt_with_sash: '🎽',
  ski: '🎿',
  sled: '🛷',
  curling_stone: '🥌',
  dart: '🎯',
  yo_yo: '🪀',
  kite: '🪁',
  gun: '🔫',
  '8ball': '🎱',
  crystal_ball: '🔮',
  magic_wand: '🪄',
  video_game: '🎮',
  joystick: '🕹️',
  slot_machine: '🎰',
  game_die: '🎲',
  jigsaw: '🧩',
  teddy_bear: '🧸',
  pinata: '🪅',
  mirror_ball: '🪩',
  nesting_dolls: '🪆',
  spades: '♠️',
  hearts: '♥️',
  diamonds: '♦️',
  clubs: '♣️',
  chess_pawn: '♟️',
  black_joker: '🃏',
  mahjong: '🀄',
  flower_playing_cards: '🎴',
  performing_arts: '🎭',
  framed_picture: '🖼️',
  art: '🎨',
  thread: '🧵',
  sewing_needle: '🪡',
  yarn: '🧶',
  knot: '🪢',
  eyeglasses: '👓',
  dark_sunglasses: '🕶️',
  goggles: '🥽',
  lab_coat: '🥼',
  safety_vest: '🦺',
  necktie: '👔',
  shirt: '👕',
  tshirt: '👕',
  jeans: '👖',
  scarf: '🧣',
  gloves: '🧤',
  coat: '🧥',
  socks: '🧦',
  dress: '👗',
  kimono: '👘',
  sari: '🥻',
  one_piece_swimsuit: '🩱',
  swim_brief: '🩲',
  shorts: '🩳',
  bikini: '👙',
  womans_clothes: '👚',
  folding_hand_fan: '🪭',
  purse: '👛',
  handbag: '👜',
  pouch: '👝',
  shopping: '🛍️',
  school_satchel: '🎒',
  thong_sandal: '🩴',
  mans_shoe: '👞',
  shoe: '👞',
  athletic_shoe: '👟',
  hiking_boot: '🥾',
  flat_shoe: '🥿',
  high_heel: '👠',
  sandal: '👡',
  ballet_shoes: '🩰',
  boot: '👢',
  hair_pick: '🪮',
  crown: '👑',
  womans_hat: '👒',
  tophat: '🎩',
  mortar_board: '🎓',
  billed_cap: '🧢',
  military_helmet: '🪖',
  rescue_worker_helmet: '⛑️',
  prayer_beads: '📿',
  lipstick: '💄',
  ring: '💍',
  gem: '💎',
  mute: '🔇',
  speaker: '🔈',
  sound: '🔉',
  loud_sound: '🔊',
  loudspeaker: '📢',
  mega: '📣',
  postal_horn: '📯',
  bell: '🔔',
  no_bell: '🔕',
  musical_score: '🎼',
  musical_note: '🎵',
  notes: '🎶',
  studio_microphone: '🎙️',
  level_slider: '🎚️',
  control_knobs: '🎛️',
  microphone: '🎤',
  headphones: '🎧',
  radio: '📻',
  saxophone: '🎷',
  accordion: '🪗',
  guitar: '🎸',
  musical_keyboard: '🎹',
  trumpet: '🎺',
  violin: '🎻',
  banjo: '🪕',
  drum: '🥁',
  long_drum: '🪘',
  maracas: '🪇',
  flute: '🪈',
  iphone: '📱',
  calling: '📲',
  phone: '☎️',
  telephone: '☎️',
  telephone_receiver: '📞',
  pager: '📟',
  fax: '📠',
  battery: '🔋',
  low_battery: '🪫',
  electric_plug: '🔌',
  computer: '💻',
  desktop_computer: '🖥️',
  printer: '🖨️',
  keyboard: '⌨️',
  computer_mouse: '🖱️',
  trackball: '🖲️',
  minidisc: '💽',
  floppy_disk: '💾',
  cd: '💿',
  dvd: '📀',
  abacus: '🧮',
  movie_camera: '🎥',
  film_strip: '🎞️',
  film_projector: '📽️',
  clapper: '🎬',
  tv: '📺',
  camera: '📷',
  camera_flash: '📸',
  video_camera: '📹',
  vhs: '📼',
  mag: '🔍',
  mag_right: '🔎',
  candle: '🕯️',
  bulb: '💡',
  flashlight: '🔦',
  izakaya_lantern: '🏮',
  lantern: '🏮',
  diya_lamp: '🪔',
  notebook_with_decorative_cover: '📔',
  closed_book: '📕',
  book: '📖',
  open_book: '📖',
  green_book: '📗',
  blue_book: '📘',
  orange_book: '📙',
  books: '📚',
  notebook: '📓',
  ledger: '📒',
  page_with_curl: '📃',
  scroll: '📜',
  page_facing_up: '📄',
  newspaper: '📰',
  newspaper_roll: '🗞️',
  bookmark_tabs: '📑',
  bookmark: '🔖',
  label: '🏷️',
  moneybag: '💰',
  coin: '🪙',
  yen: '💴',
  dollar: '💵',
  euro: '💶',
  pound: '💷',
  money_with_wings: '💸',
  credit_card: '💳',
  receipt: '🧾',
  chart: '💹',
  envelope: '✉️',
  email: '📧',
  'e-mail': '📧',
  incoming_envelope: '📨',
  envelope_with_arrow: '📩',
  outbox_tray: '📤',
  inbox_tray: '📥',
  package: '📦',
  mailbox: '📫',
  mailbox_closed: '📪',
  mailbox_with_mail: '📬',
  mailbox_with_no_mail: '📭',
  postbox: '📮',
  ballot_box: '🗳️',
  pencil2: '✏️',
  black_nib: '✒️',
  fountain_pen: '🖋️',
  pen: '🖊️',
  paintbrush: '🖌️',
  crayon: '🖍️',
  memo: '📝',
  pencil: '📝',
  briefcase: '💼',
  file_folder: '📁',
  open_file_folder: '📂',
  card_index_dividers: '🗂️',
  date: '📅',
  calendar: '📆',
  spiral_notepad: '🗒️',
  spiral_calendar: '🗓️',
  card_index: '📇',
  chart_with_upwards_trend: '📈',
  chart_with_downwards_trend: '📉',
  bar_chart: '📊',
  clipboard: '📋',
  pushpin: '📌',
  round_pushpin: '📍',
  paperclip: '📎',
  paperclips: '🖇️',
  straight_ruler: '📏',
  triangular_ruler: '📐',
  scissors: '✂️',
  card_file_box: '🗃️',
  file_cabinet: '🗄️',
  wastebasket: '🗑️',
  lock: '🔒',
  unlock: '🔓',
  lock_with_ink_pen: '🔏',
  closed_lock_with_key: '🔐',
  key: '🔑',
  old_key: '🗝️',
  hammer: '🔨',
  axe: '🪓',
  pick: '⛏️',
  hammer_and_pick: '⚒️',
  hammer_and_wrench: '🛠️',
  dagger: '🗡️',
  crossed_swords: '⚔️',
  bomb: '💣',
  boomerang: '🪃',
  bow_and_arrow: '🏹',
  shield: '🛡️',
  carpentry_saw: '🪚',
  wrench: '🔧',
  screwdriver: '🪛',
  nut_and_bolt: '🔩',
  gear: '⚙️',
  clamp: '🗜️',
  balance_scale: '⚖️',
  probing_cane: '🦯',
  link: '🔗',
  chains: '⛓️',
  hook: '🪝',
  toolbox: '🧰',
  magnet: '🧲',
  ladder: '🪜',
  alembic: '⚗️',
  test_tube: '🧪',
  petri_dish: '🧫',
  dna: '🧬',
  microscope: '🔬',
  telescope: '🔭',
  satellite: '📡',
  syringe: '💉',
  drop_of_blood: '🩸',
  pill: '💊',
  adhesive_bandage: '🩹',
  crutch: '🩼',
  stethoscope: '🩺',
  x_ray: '🩻',
  door: '🚪',
  elevator: '🛗',
  mirror: '🪞',
  globalThis: '🪟',
  bed: '🛏️',
  couch_and_lamp: '🛋️',
  chair: '🪑',
  toilet: '🚽',
  plunger: '🪠',
  shower: '🚿',
  bathtub: '🛁',
  mouse_trap: '🪤',
  razor: '🪒',
  lotion_bottle: '🧴',
  safety_pin: '🧷',
  broom: '🧹',
  basket: '🧺',
  roll_of_paper: '🧻',
  bucket: '🪣',
  soap: '🧼',
  bubbles: '🫧',
  toothbrush: '🪥',
  sponge: '🧽',
  fire_extinguisher: '🧯',
  shopping_cart: '🛒',
  smoking: '🚬',
  coffin: '⚰️',
  headstone: '🪦',
  funeral_urn: '⚱️',
  nazar_amulet: '🧿',
  hamsa: '🪬',
  moyai: '🗿',
  placard: '🪧',
  identification_card: '🪪',
  atm: '🏧',
  put_litter_in_its_place: '🚮',
  potable_water: '🚰',
  wheelchair: '♿',
  mens: '🚹',
  womens: '🚺',
  restroom: '🚻',
  baby_symbol: '🚼',
  wc: '🚾',
  passport_control: '🛂',
  customs: '🛃',
  baggage_claim: '🛄',
  left_luggage: '🛅',
  warning: '⚠️',
  children_crossing: '🚸',
  no_entry: '⛔',
  no_entry_sign: '🚫',
  no_bicycles: '🚳',
  no_smoking: '🚭',
  do_not_litter: '🚯',
  'non-potable_water': '🚱',
  no_pedestrians: '🚷',
  no_mobile_phones: '📵',
  underage: '🔞',
  radioactive: '☢️',
  biohazard: '☣️',
  arrow_up: '⬆️',
  arrow_upper_right: '↗️',
  arrow_right: '➡️',
  arrow_lower_right: '↘️',
  arrow_down: '⬇️',
  arrow_lower_left: '↙️',
  arrow_left: '⬅️',
  arrow_upper_left: '↖️',
  arrow_up_down: '↕️',
  left_right_arrow: '↔️',
  leftwards_arrow_with_hook: '↩️',
  arrow_right_hook: '↪️',
  arrow_heading_up: '⤴️',
  arrow_heading_down: '⤵️',
  arrows_clockwise: '🔃',
  arrows_counterclockwise: '🔄',
  back: '🔙',
  end: '🔚',
  on: '🔛',
  soon: '🔜',
  top: '🔝',
  place_of_worship: '🛐',
  atom_symbol: '⚛️',
  om: '🕉️',
  star_of_david: '✡️',
  wheel_of_dharma: '☸️',
  yin_yang: '☯️',
  latin_cross: '✝️',
  orthodox_cross: '☦️',
  star_and_crescent: '☪️',
  peace_symbol: '☮️',
  menorah: '🕎',
  six_pointed_star: '🔯',
  khanda: '🪯',
  aries: '♈',
  taurus: '♉',
  gemini: '♊',
  cancer: '♋',
  leo: '♌',
  virgo: '♍',
  libra: '♎',
  scorpius: '♏',
  sagittarius: '♐',
  capricorn: '♑',
  aquarius: '♒',
  pisces: '♓',
  ophiuchus: '⛎',
  twisted_rightwards_arrows: '🔀',
  repeat: '🔁',
  repeat_one: '🔂',
  arrow_forward: '▶️',
  fast_forward: '⏩',
  next_track_button: '⏭️',
  play_or_pause_button: '⏯️',
  arrow_backward: '◀️',
  rewind: '⏪',
  previous_track_button: '⏮️',
  arrow_up_small: '🔼',
  arrow_double_up: '⏫',
  arrow_down_small: '🔽',
  arrow_double_down: '⏬',
  pause_button: '⏸️',
  stop_button: '⏹️',
  record_button: '⏺️',
  eject_button: '⏏️',
  cinema: '🎦',
  low_brightness: '🔅',
  high_brightness: '🔆',
  signal_strength: '📶',
  wireless: '🛜',
  vibration_mode: '📳',
  mobile_phone_off: '📴',
  female_sign: '♀️',
  male_sign: '♂️',
  transgender_symbol: '⚧️',
  heavy_multiplication_x: '✖️',
  heavy_plus_sign: '➕',
  heavy_minus_sign: '➖',
  heavy_division_sign: '➗',
  heavy_equals_sign: '🟰',
  infinity: '♾️',
  bangbang: '‼️',
  interrobang: '⁉️',
  question: '❓',
  grey_question: '❔',
  grey_exclamation: '❕',
  exclamation: '❗',
  heavy_exclamation_mark: '❗',
  wavy_dash: '〰️',
  currency_exchange: '💱',
  heavy_dollar_sign: '💲',
  medical_symbol: '⚕️',
  recycle: '♻️',
  fleur_de_lis: '⚜️',
  trident: '🔱',
  name_badge: '📛',
  beginner: '🔰',
  o: '⭕',
  white_check_mark: '✅',
  ballot_box_with_check: '☑️',
  heavy_check_mark: '✔️',
  x: '❌',
  negative_squared_cross_mark: '❎',
  curly_loop: '➰',
  loop: '➿',
  part_alternation_mark: '〽️',
  eight_spoked_asterisk: '✳️',
  eight_pointed_black_star: '✴️',
  sparkle: '❇️',
  copyright: '©️',
  registered: '®️',
  tm: '™️',
  hash: '#️⃣',
  asterisk: '*️⃣',
  zero: '0️⃣',
  one: '1️⃣',
  two: '2️⃣',
  three: '3️⃣',
  four: '4️⃣',
  five: '5️⃣',
  six: '6️⃣',
  seven: '7️⃣',
  eight: '8️⃣',
  nine: '9️⃣',
  keycap_ten: '🔟',
  capital_abcd: '🔠',
  abcd: '🔡',
  symbols: '🔣',
  abc: '🔤',
  a: '🅰️',
  ab: '🆎',
  b: '🅱️',
  cl: '🆑',
  cool: '🆒',
  free: '🆓',
  information_source: 'ℹ️',
  id: '🆔',
  m: 'Ⓜ️',
  new: '🆕',
  ng: '🆖',
  o2: '🅾️',
  ok: '🆗',
  parking: '🅿️',
  sos: '🆘',
  up: '🆙',
  vs: '🆚',
  koko: '🈁',
  sa: '🈂️',
  u6708: '🈷️',
  u6709: '🈶',
  u6307: '🈯',
  ideograph_advantage: '🉐',
  u5272: '🈹',
  u7121: '🈚',
  u7981: '🈲',
  accept: '🉑',
  u7533: '🈸',
  u5408: '🈴',
  u7a7a: '🈳',
  congratulations: '㊗️',
  secret: '㊙️',
  u55b6: '🈺',
  u6e80: '🈵',
  red_circle: '🔴',
  orange_circle: '🟠',
  yellow_circle: '🟡',
  green_circle: '🟢',
  large_blue_circle: '🔵',
  purple_circle: '🟣',
  brown_circle: '🟤',
  black_circle: '⚫',
  white_circle: '⚪',
  red_square: '🟥',
  orange_square: '🟧',
  yellow_square: '🟨',
  green_square: '🟩',
  blue_square: '🟦',
  purple_square: '🟪',
  brown_square: '🟫',
  black_large_square: '⬛',
  white_large_square: '⬜',
  black_medium_square: '◼️',
  white_medium_square: '◻️',
  black_medium_small_square: '◾',
  white_medium_small_square: '◽',
  black_small_square: '▪️',
  white_small_square: '▫️',
  large_orange_diamond: '🔶',
  large_blue_diamond: '🔷',
  small_orange_diamond: '🔸',
  small_blue_diamond: '🔹',
  small_red_triangle: '🔺',
  small_red_triangle_down: '🔻',
  diamond_shape_with_a_dot_inside: '💠',
  radio_button: '🔘',
  white_square_button: '🔳',
  black_square_button: '🔲',
  checkered_flag: '🏁',
  triangular_flag_on_post: '🚩',
  crossed_flags: '🎌',
  black_flag: '🏴',
  white_flag: '🏳️',
  rainbow_flag: '🏳️‍🌈',
  transgender_flag: '🏳️‍⚧️',
  pirate_flag: '🏴‍☠️',
  ascension_island: '🇦🇨',
  andorra: '🇦🇩',
  united_arab_emirates: '🇦🇪',
  afghanistan: '🇦🇫',
  antigua_barbuda: '🇦🇬',
  anguilla: '🇦🇮',
  albania: '🇦🇱',
  armenia: '🇦🇲',
  angola: '🇦🇴',
  antarctica: '🇦🇶',
  argentina: '🇦🇷',
  american_samoa: '🇦🇸',
  austria: '🇦🇹',
  australia: '🇦🇺',
  aruba: '🇦🇼',
  aland_islands: '🇦🇽',
  azerbaijan: '🇦🇿',
  bosnia_herzegovina: '🇧🇦',
  barbados: '🇧🇧',
  bangladesh: '🇧🇩',
  belgium: '🇧🇪',
  burkina_faso: '🇧🇫',
  bulgaria: '🇧🇬',
  bahrain: '🇧🇭',
  burundi: '🇧🇮',
  benin: '🇧🇯',
  st_barthelemy: '🇧🇱',
  bermuda: '🇧🇲',
  brunei: '🇧🇳',
  bolivia: '🇧🇴',
  caribbean_netherlands: '🇧🇶',
  brazil: '🇧🇷',
  bahamas: '🇧🇸',
  bhutan: '🇧🇹',
  bouvet_island: '🇧🇻',
  botswana: '🇧🇼',
  belarus: '🇧🇾',
  belize: '🇧🇿',
  canada: '🇨🇦',
  cocos_islands: '🇨🇨',
  congo_kinshasa: '🇨🇩',
  central_african_republic: '🇨🇫',
  congo_brazzaville: '🇨🇬',
  switzerland: '🇨🇭',
  cote_divoire: '🇨🇮',
  cook_islands: '🇨🇰',
  chile: '🇨🇱',
  cameroon: '🇨🇲',
  cn: '🇨🇳',
  colombia: '🇨🇴',
  clipperton_island: '🇨🇵',
  costa_rica: '🇨🇷',
  cuba: '🇨🇺',
  cape_verde: '🇨🇻',
  curacao: '🇨🇼',
  christmas_island: '🇨🇽',
  cyprus: '🇨🇾',
  czech_republic: '🇨🇿',
  de: '🇩🇪',
  diego_garcia: '🇩🇬',
  djibouti: '🇩🇯',
  denmark: '🇩🇰',
  dominica: '🇩🇲',
  dominican_republic: '🇩🇴',
  algeria: '🇩🇿',
  ceuta_melilla: '🇪🇦',
  ecuador: '🇪🇨',
  estonia: '🇪🇪',
  egypt: '🇪🇬',
  western_sahara: '🇪🇭',
  eritrea: '🇪🇷',
  es: '🇪🇸',
  ethiopia: '🇪🇹',
  eu: '🇪🇺',
  european_union: '🇪🇺',
  finland: '🇫🇮',
  fiji: '🇫🇯',
  falkland_islands: '🇫🇰',
  micronesia: '🇫🇲',
  faroe_islands: '🇫🇴',
  fr: '🇫🇷',
  gabon: '🇬🇦',
  gb: '🇬🇧',
  uk: '🇬🇧',
  grenada: '🇬🇩',
  georgia: '🇬🇪',
  french_guiana: '🇬🇫',
  guernsey: '🇬🇬',
  ghana: '🇬🇭',
  gibraltar: '🇬🇮',
  greenland: '🇬🇱',
  gambia: '🇬🇲',
  guinea: '🇬🇳',
  guadeloupe: '🇬🇵',
  equatorial_guinea: '🇬🇶',
  greece: '🇬🇷',
  south_georgia_south_sandwich_islands: '🇬🇸',
  guatemala: '🇬🇹',
  guam: '🇬🇺',
  guinea_bissau: '🇬🇼',
  guyana: '🇬🇾',
  hong_kong: '🇭🇰',
  heard_mcdonald_islands: '🇭🇲',
  honduras: '🇭🇳',
  croatia: '🇭🇷',
  haiti: '🇭🇹',
  hungary: '🇭🇺',
  canary_islands: '🇮🇨',
  indonesia: '🇮🇩',
  ireland: '🇮🇪',
  israel: '🇮🇱',
  isle_of_man: '🇮🇲',
  india: '🇮🇳',
  british_indian_ocean_territory: '🇮🇴',
  iraq: '🇮🇶',
  iran: '🇮🇷',
  iceland: '🇮🇸',
  it: '🇮🇹',
  jersey: '🇯🇪',
  jamaica: '🇯🇲',
  jordan: '🇯🇴',
  jp: '🇯🇵',
  kenya: '🇰🇪',
  kyrgyzstan: '🇰🇬',
  cambodia: '🇰🇭',
  kiribati: '🇰🇮',
  comoros: '🇰🇲',
  st_kitts_nevis: '🇰🇳',
  north_korea: '🇰🇵',
  kr: '🇰🇷',
  kuwait: '🇰🇼',
  cayman_islands: '🇰🇾',
  kazakhstan: '🇰🇿',
  laos: '🇱🇦',
  lebanon: '🇱🇧',
  st_lucia: '🇱🇨',
  liechtenstein: '🇱🇮',
  sri_lanka: '🇱🇰',
  liberia: '🇱🇷',
  lesotho: '🇱🇸',
  lithuania: '🇱🇹',
  luxembourg: '🇱🇺',
  latvia: '🇱🇻',
  libya: '🇱🇾',
  morocco: '🇲🇦',
  monaco: '🇲🇨',
  moldova: '🇲🇩',
  montenegro: '🇲🇪',
  st_martin: '🇲🇫',
  madagascar: '🇲🇬',
  marshall_islands: '🇲🇭',
  macedonia: '🇲🇰',
  mali: '🇲🇱',
  myanmar: '🇲🇲',
  mongolia: '🇲🇳',
  macau: '🇲🇴',
  northern_mariana_islands: '🇲🇵',
  martinique: '🇲🇶',
  mauritania: '🇲🇷',
  montserrat: '🇲🇸',
  malta: '🇲🇹',
  mauritius: '🇲🇺',
  maldives: '🇲🇻',
  malawi: '🇲🇼',
  mexico: '🇲🇽',
  malaysia: '🇲🇾',
  mozambique: '🇲🇿',
  namibia: '🇳🇦',
  new_caledonia: '🇳🇨',
  niger: '🇳🇪',
  norfolk_island: '🇳🇫',
  nigeria: '🇳🇬',
  nicaragua: '🇳🇮',
  netherlands: '🇳🇱',
  norway: '🇳🇴',
  nepal: '🇳🇵',
  nauru: '🇳🇷',
  niue: '🇳🇺',
  new_zealand: '🇳🇿',
  oman: '🇴🇲',
  panama: '🇵🇦',
  peru: '🇵🇪',
  french_polynesia: '🇵🇫',
  papua_new_guinea: '🇵🇬',
  philippines: '🇵🇭',
  pakistan: '🇵🇰',
  poland: '🇵🇱',
  st_pierre_miquelon: '🇵🇲',
  pitcairn_islands: '🇵🇳',
  puerto_rico: '🇵🇷',
  palestinian_territories: '🇵🇸',
  portugal: '🇵🇹',
  palau: '🇵🇼',
  paraguay: '🇵🇾',
  qatar: '🇶🇦',
  reunion: '🇷🇪',
  romania: '🇷🇴',
  serbia: '🇷🇸',
  ru: '🇷🇺',
  rwanda: '🇷🇼',
  saudi_arabia: '🇸🇦',
  solomon_islands: '🇸🇧',
  seychelles: '🇸🇨',
  sudan: '🇸🇩',
  sweden: '🇸🇪',
  singapore: '🇸🇬',
  st_helena: '🇸🇭',
  slovenia: '🇸🇮',
  svalbard_jan_mayen: '🇸🇯',
  slovakia: '🇸🇰',
  sierra_leone: '🇸🇱',
  san_marino: '🇸🇲',
  senegal: '🇸🇳',
  somalia: '🇸🇴',
  suriname: '🇸🇷',
  south_sudan: '🇸🇸',
  sao_tome_principe: '🇸🇹',
  el_salvador: '🇸🇻',
  sint_maarten: '🇸🇽',
  syria: '🇸🇾',
  swaziland: '🇸🇿',
  tristan_da_cunha: '🇹🇦',
  turks_caicos_islands: '🇹🇨',
  chad: '🇹🇩',
  french_southern_territories: '🇹🇫',
  togo: '🇹🇬',
  thailand: '🇹🇭',
  tajikistan: '🇹🇯',
  tokelau: '🇹🇰',
  timor_leste: '🇹🇱',
  turkmenistan: '🇹🇲',
  tunisia: '🇹🇳',
  tonga: '🇹🇴',
  tr: '🇹🇷',
  trinidad_tobago: '🇹🇹',
  tuvalu: '🇹🇻',
  taiwan: '🇹🇼',
  tanzania: '🇹🇿',
  ukraine: '🇺🇦',
  uganda: '🇺🇬',
  us_outlying_islands: '🇺🇲',
  united_nations: '🇺🇳',
  us: '🇺🇸',
  uruguay: '🇺🇾',
  uzbekistan: '🇺🇿',
  vatican_city: '🇻🇦',
  st_vincent_grenadines: '🇻🇨',
  venezuela: '🇻🇪',
  british_virgin_islands: '🇻🇬',
  us_virgin_islands: '🇻🇮',
  vietnam: '🇻🇳',
  vanuatu: '🇻🇺',
  wallis_futuna: '🇼🇫',
  samoa: '🇼🇸',
  kosovo: '🇽🇰',
  yemen: '🇾🇪',
  mayotte: '🇾🇹',
  south_africa: '🇿🇦',
  zambia: '🇿🇲',
  zimbabwe: '🇿🇼',
  england: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  scotland: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  wales: '🏴󠁧󠁢󠁷󠁬󠁳󠁿'
};

function escapeStringRegexp(string) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	// Escape characters with special meaning either inside or outside character sets.
	// Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
	return string
		.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
		.replace(/-/g, '\\x2d');
}

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 */


/**
 * Generate an assertion from a test.
 *
 * Useful if you’re going to test many nodes, for example when creating a
 * utility where something else passes a compatible test.
 *
 * The created function is a bit faster because it expects valid input only:
 * a `node`, `index`, and `parent`.
 *
 * @param {Test} test
 *   *   when nullish, checks if `node` is a `Node`.
 *   *   when `string`, works like passing `(node) => node.type === test`.
 *   *   when `function` checks if function passed the node is true.
 *   *   when `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
 *   *   when `array`, checks if any one of the subtests pass.
 * @returns {Check}
 *   An assertion.
 */
const convert =
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  (
    /**
     * @param {Test} [test]
     * @returns {Check}
     */
    function (test) {
      if (test === null || test === undefined) {
        return ok$1
      }

      if (typeof test === 'function') {
        return castFactory(test)
      }

      if (typeof test === 'object') {
        return Array.isArray(test) ? anyFactory(test) : propsFactory(test)
      }

      if (typeof test === 'string') {
        return typeFactory(test)
      }

      throw new Error('Expected function, string, or object as test')
    }
  );

/**
 * @param {Array<Props | TestFunction | string>} tests
 * @returns {Check}
 */
function anyFactory(tests) {
  /** @type {Array<Check>} */
  const checks = [];
  let index = -1;

  while (++index < tests.length) {
    checks[index] = convert(tests[index]);
  }

  return castFactory(any)

  /**
   * @this {unknown}
   * @type {TestFunction}
   */
  function any(...parameters) {
    let index = -1;

    while (++index < checks.length) {
      if (checks[index].apply(this, parameters)) return true
    }

    return false
  }
}

/**
 * Turn an object into a test for a node with a certain fields.
 *
 * @param {Props} check
 * @returns {Check}
 */
function propsFactory(check) {
  const checkAsRecord = /** @type {Record<string, unknown>} */ (check);

  return castFactory(all)

  /**
   * @param {Node} node
   * @returns {boolean}
   */
  function all(node) {
    const nodeAsRecord = /** @type {Record<string, unknown>} */ (
      /** @type {unknown} */ (node)
    );

    /** @type {string} */
    let key;

    for (key in check) {
      if (nodeAsRecord[key] !== checkAsRecord[key]) return false
    }

    return true
  }
}

/**
 * Turn a string into a test for a node with a certain type.
 *
 * @param {string} check
 * @returns {Check}
 */
function typeFactory(check) {
  return castFactory(type)

  /**
   * @param {Node} node
   */
  function type(node) {
    return node && node.type === check
  }
}

/**
 * Turn a custom test into a test for a node that passes that test.
 *
 * @param {TestFunction} testFunction
 * @returns {Check}
 */
function castFactory(testFunction) {
  return check

  /**
   * @this {unknown}
   * @type {Check}
   */
  function check(value, index, parent) {
    return Boolean(
      looksLikeANode(value) &&
        testFunction.call(
          this,
          value,
          typeof index === 'number' ? index : undefined,
          parent || undefined
        )
    )
  }
}

function ok$1() {
  return true
}

/**
 * @param {unknown} value
 * @returns {value is Node}
 */
function looksLikeANode(value) {
  return value !== null && typeof value === 'object' && 'type' in value
}

/**
 * @param {string} d
 * @returns {string}
 */
function color(d) {
  return d
}

/**
 * @typedef {import('unist').Node} UnistNode
 * @typedef {import('unist').Parent} UnistParent
 */


/** @type {Readonly<ActionTuple>} */
const empty = [];

/**
 * Continue traversing as normal.
 */
const CONTINUE = true;

/**
 * Stop traversing immediately.
 */
const EXIT = false;

/**
 * Do not traverse this node’s children.
 */
const SKIP = 'skip';

/**
 * Visit nodes, with ancestral information.
 *
 * This algorithm performs *depth-first* *tree traversal* in *preorder*
 * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).
 *
 * You can choose for which nodes `visitor` is called by passing a `test`.
 * For complex tests, you should test yourself in `visitor`, as it will be
 * faster and will have improved type information.
 *
 * Walking the tree is an intensive task.
 * Make use of the return values of the visitor when possible.
 * Instead of walking a tree multiple times, walk it once, use `unist-util-is`
 * to check if a node matches, and then perform different operations.
 *
 * You can change the tree.
 * See `Visitor` for more info.
 *
 * @overload
 * @param {Tree} tree
 * @param {Check} check
 * @param {BuildVisitor<Tree, Check>} visitor
 * @param {boolean | null | undefined} [reverse]
 * @returns {undefined}
 *
 * @overload
 * @param {Tree} tree
 * @param {BuildVisitor<Tree>} visitor
 * @param {boolean | null | undefined} [reverse]
 * @returns {undefined}
 *
 * @param {UnistNode} tree
 *   Tree to traverse.
 * @param {Visitor | Test} test
 *   `unist-util-is`-compatible test
 * @param {Visitor | boolean | null | undefined} [visitor]
 *   Handle each node.
 * @param {boolean | null | undefined} [reverse]
 *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).
 * @returns {undefined}
 *   Nothing.
 *
 * @template {UnistNode} Tree
 *   Node type.
 * @template {Test} Check
 *   `unist-util-is`-compatible test.
 */
function visitParents(tree, test, visitor, reverse) {
  /** @type {Test} */
  let check;

  {
    // @ts-expect-error visitor given, so `test` isn’t a visitor.
    check = test;
  }

  const is = convert(check);
  const step = 1;

  factory(tree, undefined, [])();

  /**
   * @param {UnistNode} node
   * @param {number | undefined} index
   * @param {Array<UnistParent>} parents
   */
  function factory(node, index, parents) {
    const value = /** @type {Record<string, unknown>} */ (
      node && typeof node === 'object' ? node : {}
    );

    if (typeof value.type === 'string') {
      const name =
        // `hast`
        typeof value.tagName === 'string'
          ? value.tagName
          : // `xast`
          typeof value.name === 'string'
          ? value.name
          : undefined;

      Object.defineProperty(visit, 'name', {
        value:
          'node (' + color(node.type + (name ? '<' + name + '>' : '')) + ')'
      });
    }

    return visit

    function visit() {
      /** @type {Readonly<ActionTuple>} */
      let result = empty;
      /** @type {Readonly<ActionTuple>} */
      let subresult;
      /** @type {number} */
      let offset;
      /** @type {Array<UnistParent>} */
      let grandparents;

      if (is(node, index, parents[parents.length - 1] || undefined)) {
        // @ts-expect-error: `visitor` is now a visitor.
        result = toResult(visitor(node, parents));

        if (result[0] === EXIT) {
          return result
        }
      }

      if ('children' in node && node.children) {
        const nodeAsParent = /** @type {UnistParent} */ (node);

        if (nodeAsParent.children && result[0] !== SKIP) {
          offset = (-1) + step;
          grandparents = parents.concat(nodeAsParent);

          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset];

            subresult = factory(child, offset, grandparents)();

            if (subresult[0] === EXIT) {
              return subresult
            }

            offset =
              typeof subresult[1] === 'number' ? subresult[1] : offset + step;
          }
        }
      }

      return result
    }
  }
}

/**
 * Turn a return value into a clean result.
 *
 * @param {VisitorResult} value
 *   Valid return values from visitors.
 * @returns {Readonly<ActionTuple>}
 *   Clean result.
 */
function toResult(value) {
  if (Array.isArray(value)) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return value === null || value === undefined ? empty : [value]
}

/**
 * @typedef {import('mdast').Nodes} Nodes
 * @typedef {import('mdast').Parents} Parents
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Text} Text
 * @typedef {import('unist-util-visit-parents').Test} Test
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 */


/**
 * Find patterns in a tree and replace them.
 *
 * The algorithm searches the tree in *preorder* for complete values in `Text`
 * nodes.
 * Partial matches are not supported.
 *
 * @param {Nodes} tree
 *   Tree to change.
 * @param {FindAndReplaceList | FindAndReplaceTuple} list
 *   Patterns to find.
 * @param {Options | null | undefined} [options]
 *   Configuration (when `find` is not `Find`).
 * @returns {undefined}
 *   Nothing.
 */
function findAndReplace(tree, list, options) {
  const settings = {};
  const ignored = convert(settings.ignore || []);
  const pairs = toPairs(list);
  let pairIndex = -1;

  while (++pairIndex < pairs.length) {
    visitParents(tree, 'text', visitor);
  }

  /** @type {import('unist-util-visit-parents').BuildVisitor<Root, 'text'>} */
  function visitor(node, parents) {
    let index = -1;
    /** @type {Parents | undefined} */
    let grandparent;

    while (++index < parents.length) {
      const parent = parents[index];
      /** @type {Array<Nodes> | undefined} */
      const siblings = grandparent ? grandparent.children : undefined;

      if (
        ignored(
          parent,
          siblings ? siblings.indexOf(parent) : undefined,
          grandparent
        )
      ) {
        return
      }

      grandparent = parent;
    }

    if (grandparent) {
      return handler(node, parents)
    }
  }

  /**
   * Handle a text node which is not in an ignored parent.
   *
   * @param {Text} node
   *   Text node.
   * @param {Array<Parents>} parents
   *   Parents.
   * @returns {VisitorResult}
   *   Result.
   */
  function handler(node, parents) {
    const parent = parents[parents.length - 1];
    const find = pairs[pairIndex][0];
    const replace = pairs[pairIndex][1];
    let start = 0;
    /** @type {Array<Nodes>} */
    const siblings = parent.children;
    const index = siblings.indexOf(node);
    let change = false;
    /** @type {Array<PhrasingContent>} */
    let nodes = [];

    find.lastIndex = 0;

    let match = find.exec(node.value);

    while (match) {
      const position = match.index;
      /** @type {RegExpMatchObject} */
      const matchObject = {
        index: match.index,
        input: match.input,
        stack: [...parents, node]
      };
      let value = replace(...match, matchObject);

      if (typeof value === 'string') {
        value = value.length > 0 ? {type: 'text', value} : undefined;
      }

      // It wasn’t a match after all.
      if (value === false) {
        // False acts as if there was no match.
        // So we need to reset `lastIndex`, which currently being at the end of
        // the current match, to the beginning.
        find.lastIndex = position + 1;
      } else {
        if (start !== position) {
          nodes.push({
            type: 'text',
            value: node.value.slice(start, position)
          });
        }

        if (Array.isArray(value)) {
          nodes.push(...value);
        } else if (value) {
          nodes.push(value);
        }

        start = position + match[0].length;
        change = true;
      }

      if (!find.global) {
        break
      }

      match = find.exec(node.value);
    }

    if (change) {
      if (start < node.value.length) {
        nodes.push({type: 'text', value: node.value.slice(start)});
      }

      parent.children.splice(index, 1, ...nodes);
    } else {
      nodes = [node];
    }

    return index + nodes.length
  }
}

/**
 * Turn a tuple or a list of tuples into pairs.
 *
 * @param {FindAndReplaceList | FindAndReplaceTuple} tupleOrList
 *   Schema.
 * @returns {Pairs}
 *   Clean pairs.
 */
function toPairs(tupleOrList) {
  /** @type {Pairs} */
  const result = [];

  if (!Array.isArray(tupleOrList)) {
    throw new TypeError('Expected find and replace tuple or list of tuples')
  }

  /** @type {FindAndReplaceList} */
  // @ts-expect-error: correct.
  const list =
    !tupleOrList[0] || Array.isArray(tupleOrList[0])
      ? tupleOrList
      : [tupleOrList];

  let index = -1;

  while (++index < list.length) {
    const tuple = list[index];
    result.push([toExpression(tuple[0]), toFunction(tuple[1])]);
  }

  return result
}

/**
 * Turn a find into an expression.
 *
 * @param {Find} find
 *   Find.
 * @returns {RegExp}
 *   Expression.
 */
function toExpression(find) {
  return typeof find === 'string' ? new RegExp(escapeStringRegexp(find), 'g') : find
}

/**
 * Turn a replace into a function.
 *
 * @param {Replace} replace
 *   Replace.
 * @returns {ReplaceFunction}
 *   Function.
 */
function toFunction(replace) {
  return typeof replace === 'function'
    ? replace
    : function () {
        return replace
      }
}

/**
 * @typedef {import('mdast').Root} Root
 */


/**
 * Turn gemoji shortcodes (`:+1:`) into emoji (`👍`).
 *
 * @returns
 *   Transform.
 */
function remarkGemoji() {
  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree) {
    findAndReplace(tree, [
      /:(\+1|[-\w]+):/g,
      /**
       * @param {string} _
       * @param {string} $1
       */
      function (_, $1) {
        return Object.hasOwn(nameToEmoji, $1) ? nameToEmoji[$1] : false
      }
    ]);
  }
}

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$7 = freeGlobal || freeSelf || Function('return this')();

var _root = root$7;

var root$6 = _root;

/** Built-in value references. */
var Symbol$3 = root$6.Symbol;

var _Symbol = Symbol$3;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */

function copyArray$1(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray$1;

var Symbol$2 = _Symbol;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$6.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$4.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto$5 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$5.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol$1 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$5(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$5;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$2;

var baseGetTag$4 = _baseGetTag,
    isObject$1 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$2(value) {
  if (!isObject$1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag$4(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$2;

var root$5 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$5['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */

var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$2;

var isFunction$1 = isFunction_1,
    isMasked = _isMasked,
    isObject = isObject_1,
    toSource$1 = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$4 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$3).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$5(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$5;

var getNative$4 = _getNative,
    root$4 = _root;

/* Built-in method references that are verified to be native. */
var DataView$1 = getNative$4(root$4, 'DataView');

var _DataView = DataView$1;

var getNative$3 = _getNative,
    root$3 = _root;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative$3(root$3, 'Map');

var _Map = Map$1;

var getNative$2 = _getNative,
    root$2 = _root;

/* Built-in method references that are verified to be native. */
var Promise$2 = getNative$2(root$2, 'Promise');

var _Promise = Promise$2;

var getNative$1 = _getNative,
    root$1 = _root;

/* Built-in method references that are verified to be native. */
var Set$1 = getNative$1(root$1, 'Set');

var _Set = Set$1;

var getNative = _getNative,
    root = _root;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = getNative(root, 'WeakMap');

var _WeakMap = WeakMap$1;

var DataView = _DataView,
    Map = _Map,
    Promise$1 = _Promise,
    Set = _Set,
    WeakMap = _WeakMap,
    baseGetTag$3 = _baseGetTag,
    toSource = _toSource;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$1 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = baseGetTag$3;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
    (Map && getTag$1(new Map) != mapTag$2) ||
    (Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag$1(new Set) != setTag$2) ||
    (WeakMap && getTag$1(new WeakMap) != weakMapTag$1)) {
  getTag$1 = function(value) {
    var result = baseGetTag$3(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$1;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag$1;

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$2(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength$2;

var isFunction = isFunction_1,
    isLength$1 = isLength_1;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$2(value) {
  return value != null && isLength$1(value.length) && !isFunction(value);
}

var isArrayLike_1 = isArrayLike$2;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray$2 = Array.isArray;

var isArray_1 = isArray$2;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike$4(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$4;

var baseGetTag$2 = _baseGetTag,
    isArray$1 = isArray_1,
    isObjectLike$3 = isObjectLike_1;

/** `Object#toString` result references. */
var stringTag$1 = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString$1(value) {
  return typeof value == 'string' ||
    (!isArray$1(value) && isObjectLike$3(value) && baseGetTag$2(value) == stringTag$1);
}

var isString_1 = isString$1;

/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */

function iteratorToArray$1(iterator) {
  var data,
      result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}

var _iteratorToArray = iteratorToArray$1;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */

function mapToArray$1(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray$1;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */

function setToArray$1(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray$1;

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */

function asciiToArray$1(string) {
  return string.split('');
}

var _asciiToArray = asciiToArray$1;

/** Used to compose unicode character classes. */

var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ$1 = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$1 + rsVarRange$1 + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode$1(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode$1;

/** Used to compose unicode character classes. */

var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray$1(string) {
  return string.match(reUnicode) || [];
}

var _unicodeToArray = unicodeToArray$1;

var asciiToArray = _asciiToArray,
    hasUnicode = _hasUnicode,
    unicodeToArray = _unicodeToArray;

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray$1(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

var _stringToArray = stringToArray$1;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$1;

var arrayMap = _arrayMap;

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues$1(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

var _baseValues = baseValues$1;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */

function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes$1;

var baseGetTag$1 = _baseGetTag,
    isObjectLike$2 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$1(value) {
  return isObjectLike$2(value) && baseGetTag$1(value) == argsTag$1;
}

var _baseIsArguments = baseIsArguments$1;

var baseIsArguments = _baseIsArguments,
    isObjectLike$1 = isObjectLike_1;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments$1 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike$1(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments$1;

var isBuffer$1 = {exports: {}};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */

function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

isBuffer$1.exports;

(function (module, exports) {
	var root = _root,
	    stubFalse = stubFalse_1;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer; 
} (isBuffer$1, isBuffer$1.exports));

var isBufferExports = isBuffer$1.exports;

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$1(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex$1;

var baseGetTag = _baseGetTag,
    isLength = isLength_1,
    isObjectLike = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray$1;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary$1;

var _nodeUtil = {exports: {}};

_nodeUtil.exports;

(function (module, exports) {
	var freeGlobal = _freeGlobal;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil; 
} (_nodeUtil, _nodeUtil.exports));

var _nodeUtilExports = _nodeUtil.exports;

var baseIsTypedArray = _baseIsTypedArray,
    baseUnary = _baseUnary,
    nodeUtil = _nodeUtilExports;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray_1 = isTypedArray$1;

var baseTimes = _baseTimes,
    isArguments = isArguments_1,
    isArray = isArray_1,
    isBuffer = isBufferExports,
    isIndex = _isIndex,
    isTypedArray = isTypedArray_1;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys$1;

/** Used for built-in method references. */

var objectProto$1 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$1;

  return value === proto;
}

var _isPrototype = isPrototype$1;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$1;

var overArg = _overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg(Object.keys, Object);

var _nativeKeys = nativeKeys$1;

var isPrototype = _isPrototype,
    nativeKeys = _nativeKeys;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys$1;

var arrayLikeKeys = _arrayLikeKeys,
    baseKeys = _baseKeys,
    isArrayLike$1 = isArrayLike_1;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$1(object) {
  return isArrayLike$1(object) ? arrayLikeKeys(object) : baseKeys(object);
}

var keys_1 = keys$1;

var baseValues = _baseValues,
    keys = keys_1;

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values$1(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

var values_1 = values$1;

var Symbol = _Symbol,
    copyArray = _copyArray,
    getTag = _getTag,
    isArrayLike = isArrayLike_1,
    isString = isString_1,
    iteratorToArray = _iteratorToArray,
    mapToArray = _mapToArray,
    setToArray = _setToArray,
    stringToArray = _stringToArray,
    values = values_1;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Built-in value references. */
var symIterator = Symbol ? Symbol.iterator : undefined;

/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */
function toArray$1(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }
  if (symIterator && value[symIterator]) {
    return iteratorToArray(value[symIterator]());
  }
  var tag = getTag(value),
      func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

  return func(value);
}

var toArray_1 = toArray$1;

var umbrella_with_rain_drops="☔";var coffee="☕";var aries="♈";var taurus="♉";var sagittarius="♐";var capricorn="♑";var aquarius="♒";var pisces="♓";var anchor="⚓";var white_check_mark="✅";var sparkles="✨";var question="❓";var grey_question="❔";var grey_exclamation="❕";var exclamation="❗";var heavy_exclamation_mark="❗";var heavy_plus_sign="➕";var heavy_minus_sign="➖";var heavy_division_sign="➗";var hash="#️⃣";var keycap_star="*️⃣";var zero="0️⃣";var one="1️⃣";var two="2️⃣";var three="3️⃣";var four="4️⃣";var five="5️⃣";var six="6️⃣";var seven="7️⃣";var eight="8️⃣";var nine="9️⃣";var copyright="©️";var registered="®️";var mahjong="🀄";var black_joker="🃏";var a="🅰️";var b="🅱️";var o2="🅾️";var parking="🅿️";var ab="🆎";var cl="🆑";var cool="🆒";var free="🆓";var id="🆔";var ng="🆖";var ok="🆗";var sos="🆘";var up="🆙";var vs="🆚";var cn="🇨🇳";var de="🇩🇪";var es="🇪🇸";var fr="🇫🇷";var gb="🇬🇧";var uk="🇬🇧";var it="🇮🇹";var jp="🇯🇵";var kr="🇰🇷";var ru="🇷🇺";var us="🇺🇸";var koko="🈁";var sa="🈂️";var u7121="🈚";var u6307="🈯";var u7981="🈲";var u7a7a="🈳";var u5408="🈴";var u6e80="🈵";var u6709="🈶";var u6708="🈷️";var u7533="🈸";var u5272="🈹";var u55b6="🈺";var ideograph_advantage="🉐";var accept="🉑";var cyclone="🌀";var foggy="🌁";var closed_umbrella="🌂";var night_with_stars="🌃";var sunrise_over_mountains="🌄";var sunrise="🌅";var city_sunset="🌆";var city_sunrise="🌇";var rainbow="🌈";var bridge_at_night="🌉";var ocean="🌊";var volcano="🌋";var milky_way="🌌";var earth_africa="🌍";var earth_americas="🌎";var earth_asia="🌏";var globe_with_meridians="🌐";var new_moon="🌑";var waxing_crescent_moon="🌒";var first_quarter_moon="🌓";var moon="🌔";var waxing_gibbous_moon="🌔";var full_moon="🌕";var waning_gibbous_moon="🌖";var last_quarter_moon="🌗";var waning_crescent_moon="🌘";var crescent_moon="🌙";var new_moon_with_face="🌚";var first_quarter_moon_with_face="🌛";var last_quarter_moon_with_face="🌜";var full_moon_with_face="🌝";var sun_with_face="🌞";var star2="🌟";var stars="🌠";var thermometer="🌡️";var mostly_sunny="🌤️";var sun_small_cloud="🌤️";var barely_sunny="🌥️";var sun_behind_cloud="🌥️";var partly_sunny_rain="🌦️";var sun_behind_rain_cloud="🌦️";var rain_cloud="🌧️";var snow_cloud="🌨️";var lightning="🌩️";var lightning_cloud="🌩️";var tornado="🌪️";var tornado_cloud="🌪️";var fog="🌫️";var wind_blowing_face="🌬️";var hotdog="🌭";var taco="🌮";var burrito="🌯";var chestnut="🌰";var seedling="🌱";var evergreen_tree="🌲";var deciduous_tree="🌳";var palm_tree="🌴";var cactus="🌵";var hot_pepper="🌶️";var tulip="🌷";var cherry_blossom="🌸";var rose="🌹";var hibiscus="🌺";var sunflower="🌻";var blossom="🌼";var corn="🌽";var ear_of_rice="🌾";var herb="🌿";var four_leaf_clover="🍀";var maple_leaf="🍁";var fallen_leaf="🍂";var leaves="🍃";var mushroom="🍄";var tomato="🍅";var eggplant="🍆";var grapes="🍇";var melon="🍈";var watermelon="🍉";var tangerine="🍊";var lemon="🍋";var banana="🍌";var pineapple="🍍";var apple="🍎";var green_apple="🍏";var pear="🍐";var peach="🍑";var cherries="🍒";var strawberry="🍓";var hamburger="🍔";var pizza="🍕";var meat_on_bone="🍖";var poultry_leg="🍗";var rice_cracker="🍘";var rice_ball="🍙";var rice="🍚";var curry="🍛";var ramen="🍜";var spaghetti="🍝";var bread="🍞";var fries="🍟";var sweet_potato="🍠";var dango="🍡";var oden="🍢";var sushi="🍣";var fried_shrimp="🍤";var fish_cake="🍥";var icecream="🍦";var shaved_ice="🍧";var ice_cream="🍨";var doughnut="🍩";var cookie="🍪";var chocolate_bar="🍫";var candy="🍬";var lollipop="🍭";var custard="🍮";var honey_pot="🍯";var cake="🍰";var bento="🍱";var stew="🍲";var fried_egg="🍳";var cooking="🍳";var fork_and_knife="🍴";var tea="🍵";var sake="🍶";var wine_glass="🍷";var cocktail="🍸";var tropical_drink="🍹";var beer="🍺";var beers="🍻";var baby_bottle="🍼";var knife_fork_plate="🍽️";var champagne="🍾";var popcorn="🍿";var ribbon="🎀";var gift="🎁";var birthday="🎂";var jack_o_lantern="🎃";var christmas_tree="🎄";var santa="🎅";var fireworks="🎆";var sparkler="🎇";var balloon="🎈";var tada="🎉";var confetti_ball="🎊";var tanabata_tree="🎋";var crossed_flags="🎌";var bamboo="🎍";var dolls="🎎";var flags="🎏";var wind_chime="🎐";var rice_scene="🎑";var school_satchel="🎒";var mortar_board="🎓";var medal="🎖️";var reminder_ribbon="🎗️";var studio_microphone="🎙️";var level_slider="🎚️";var control_knobs="🎛️";var film_frames="🎞️";var admission_tickets="🎟️";var carousel_horse="🎠";var ferris_wheel="🎡";var roller_coaster="🎢";var fishing_pole_and_fish="🎣";var microphone="🎤";var movie_camera="🎥";var cinema="🎦";var headphones="🎧";var art="🎨";var tophat="🎩";var circus_tent="🎪";var ticket="🎫";var clapper="🎬";var performing_arts="🎭";var video_game="🎮";var dart="🎯";var slot_machine="🎰";var game_die="🎲";var bowling="🎳";var flower_playing_cards="🎴";var musical_note="🎵";var notes="🎶";var saxophone="🎷";var guitar="🎸";var musical_keyboard="🎹";var trumpet="🎺";var violin="🎻";var musical_score="🎼";var running_shirt_with_sash="🎽";var tennis="🎾";var ski="🎿";var basketball="🏀";var checkered_flag="🏁";var snowboarder="🏂";var runner="🏃‍♂️";var running="🏃‍♂️";var surfer="🏄‍♂️";var sports_medal="🏅";var trophy="🏆";var horse_racing="🏇";var football="🏈";var rugby_football="🏉";var swimmer="🏊‍♂️";var weight_lifter="🏋️‍♂️";var golfer="🏌️‍♂️";var racing_motorcycle="🏍️";var racing_car="🏎️";var cricket_bat_and_ball="🏏";var volleyball="🏐";var field_hockey_stick_and_ball="🏑";var ice_hockey_stick_and_puck="🏒";var table_tennis_paddle_and_ball="🏓";var snow_capped_mountain="🏔️";var camping="🏕️";var beach_with_umbrella="🏖️";var building_construction="🏗️";var house_buildings="🏘️";var cityscape="🏙️";var derelict_house_building="🏚️";var classical_building="🏛️";var desert="🏜️";var desert_island="🏝️";var national_park="🏞️";var stadium="🏟️";var house="🏠";var house_with_garden="🏡";var office="🏢";var post_office="🏣";var european_post_office="🏤";var hospital="🏥";var bank="🏦";var atm="🏧";var hotel="🏨";var love_hotel="🏩";var convenience_store="🏪";var school="🏫";var department_store="🏬";var factory="🏭";var izakaya_lantern="🏮";var lantern="🏮";var japanese_castle="🏯";var european_castle="🏰";var transgender_flag="🏳️‍⚧️";var waving_white_flag="🏳️";var pirate_flag="🏴‍☠️";var waving_black_flag="🏴";var rosette="🏵️";var label="🏷️";var badminton_racquet_and_shuttlecock="🏸";var bow_and_arrow="🏹";var amphora="🏺";var rat="🐀";var mouse2="🐁";var ox="🐂";var water_buffalo="🐃";var cow2="🐄";var tiger2="🐅";var leopard="🐆";var rabbit2="🐇";var black_cat="🐈‍⬛";var cat2="🐈";var dragon="🐉";var crocodile="🐊";var whale2="🐋";var snail="🐌";var snake="🐍";var racehorse="🐎";var ram="🐏";var goat="🐐";var sheep="🐑";var monkey="🐒";var rooster="🐓";var chicken="🐔";var service_dog="🐕‍🦺";var dog2="🐕";var pig2="🐖";var boar="🐗";var elephant="🐘";var octopus="🐙";var shell="🐚";var bug="🐛";var ant="🐜";var bee="🐝";var honeybee="🐝";var ladybug="🐞";var lady_beetle="🐞";var fish="🐟";var tropical_fish="🐠";var blowfish="🐡";var turtle="🐢";var hatching_chick="🐣";var baby_chick="🐤";var hatched_chick="🐥";var bird="🐦";var penguin="🐧";var koala="🐨";var poodle="🐩";var dromedary_camel="🐪";var camel="🐫";var dolphin="🐬";var flipper="🐬";var mouse="🐭";var cow="🐮";var tiger="🐯";var rabbit="🐰";var cat="🐱";var dragon_face="🐲";var whale="🐳";var horse="🐴";var monkey_face="🐵";var dog="🐶";var pig="🐷";var frog="🐸";var hamster="🐹";var wolf="🐺";var polar_bear="🐻‍❄️";var bear="🐻";var panda_face="🐼";var pig_nose="🐽";var feet="🐾";var paw_prints="🐾";var chipmunk="🐿️";var eyes="👀";var eye="👁️";var ear="👂";var nose="👃";var lips="👄";var tongue="👅";var point_up_2="👆";var point_down="👇";var point_left="👈";var point_right="👉";var facepunch="👊";var punch="👊";var wave="👋";var ok_hand="👌";var thumbsup="👍";var thumbsdown="👎";var clap="👏";var open_hands="👐";var crown="👑";var womans_hat="👒";var eyeglasses="👓";var necktie="👔";var shirt="👕";var tshirt="👕";var jeans="👖";var dress="👗";var kimono="👘";var bikini="👙";var womans_clothes="👚";var purse="👛";var handbag="👜";var pouch="👝";var mans_shoe="👞";var shoe="👞";var athletic_shoe="👟";var high_heel="👠";var sandal="👡";var boot="👢";var footprints="👣";var bust_in_silhouette="👤";var busts_in_silhouette="👥";var boy="👦";var girl="👧";var man_feeding_baby="👨‍🍼";var family="👨‍👩‍👦";var man_with_probing_cane="👨‍🦯";var red_haired_man="👨‍🦰";var curly_haired_man="👨‍🦱";var bald_man="👨‍🦲";var white_haired_man="👨‍🦳";var man_in_motorized_wheelchair="👨‍🦼";var man_in_manual_wheelchair="👨‍🦽";var man="👨";var woman_feeding_baby="👩‍🍼";var woman_with_probing_cane="👩‍🦯";var red_haired_woman="👩‍🦰";var curly_haired_woman="👩‍🦱";var bald_woman="👩‍🦲";var white_haired_woman="👩‍🦳";var woman_in_motorized_wheelchair="👩‍🦼";var woman_in_manual_wheelchair="👩‍🦽";var woman="👩";var man_and_woman_holding_hands="👫";var woman_and_man_holding_hands="👫";var couple="👫";var two_men_holding_hands="👬";var men_holding_hands="👬";var two_women_holding_hands="👭";var women_holding_hands="👭";var cop="👮‍♂️";var dancers="👯‍♀️";var woman_with_veil="👰‍♀️";var man_with_veil="👰‍♂️";var bride_with_veil="👰";var person_with_blond_hair="👱‍♂️";var man_with_gua_pi_mao="👲";var man_with_turban="👳‍♂️";var older_man="👴";var older_woman="👵";var baby="👶";var construction_worker="👷‍♂️";var princess="👸";var japanese_ogre="👹";var japanese_goblin="👺";var ghost="👻";var angel="👼";var alien="👽";var space_invader="👾";var imp="👿";var skull="💀";var information_desk_person="💁‍♀️";var guardsman="💂‍♂️";var dancer="💃";var lipstick="💄";var nail_care="💅";var massage="💆‍♀️";var haircut="💇‍♀️";var barber="💈";var syringe="💉";var pill="💊";var kiss="💋";var love_letter="💌";var ring="💍";var gem="💎";var couplekiss="💏";var bouquet="💐";var couple_with_heart="💑";var wedding="💒";var heartbeat="💓";var broken_heart="💔";var two_hearts="💕";var sparkling_heart="💖";var heartpulse="💗";var cupid="💘";var blue_heart="💙";var green_heart="💚";var yellow_heart="💛";var purple_heart="💜";var gift_heart="💝";var revolving_hearts="💞";var heart_decoration="💟";var diamond_shape_with_a_dot_inside="💠";var bulb="💡";var anger="💢";var bomb="💣";var zzz="💤";var boom="💥";var collision="💥";var sweat_drops="💦";var droplet="💧";var dash="💨";var hankey="💩";var poop="💩";var shit="💩";var muscle="💪";var dizzy="💫";var speech_balloon="💬";var thought_balloon="💭";var white_flower="💮";var moneybag="💰";var currency_exchange="💱";var heavy_dollar_sign="💲";var credit_card="💳";var yen="💴";var dollar="💵";var euro="💶";var pound="💷";var money_with_wings="💸";var chart="💹";var seat="💺";var computer="💻";var briefcase="💼";var minidisc="💽";var floppy_disk="💾";var cd="💿";var dvd="📀";var file_folder="📁";var open_file_folder="📂";var page_with_curl="📃";var page_facing_up="📄";var date="📅";var calendar="📆";var card_index="📇";var chart_with_upwards_trend="📈";var chart_with_downwards_trend="📉";var bar_chart="📊";var clipboard="📋";var pushpin="📌";var round_pushpin="📍";var paperclip="📎";var straight_ruler="📏";var triangular_ruler="📐";var bookmark_tabs="📑";var ledger="📒";var notebook="📓";var notebook_with_decorative_cover="📔";var closed_book="📕";var book="📖";var open_book="📖";var green_book="📗";var blue_book="📘";var orange_book="📙";var books="📚";var name_badge="📛";var scroll="📜";var memo="📝";var pencil="📝";var telephone_receiver="📞";var pager="📟";var fax="📠";var satellite_antenna="📡";var loudspeaker="📢";var mega="📣";var outbox_tray="📤";var inbox_tray="📥";var incoming_envelope="📨";var envelope_with_arrow="📩";var mailbox_closed="📪";var mailbox="📫";var mailbox_with_mail="📬";var mailbox_with_no_mail="📭";var postbox="📮";var postal_horn="📯";var newspaper="📰";var iphone="📱";var calling="📲";var vibration_mode="📳";var mobile_phone_off="📴";var no_mobile_phones="📵";var signal_strength="📶";var camera="📷";var camera_with_flash="📸";var video_camera="📹";var tv="📺";var radio="📻";var vhs="📼";var film_projector="📽️";var prayer_beads="📿";var twisted_rightwards_arrows="🔀";var repeat="🔁";var repeat_one="🔂";var arrows_clockwise="🔃";var arrows_counterclockwise="🔄";var low_brightness="🔅";var high_brightness="🔆";var mute="🔇";var speaker="🔈";var sound="🔉";var loud_sound="🔊";var battery="🔋";var electric_plug="🔌";var mag="🔍";var mag_right="🔎";var lock_with_ink_pen="🔏";var closed_lock_with_key="🔐";var key="🔑";var lock="🔒";var unlock="🔓";var bell="🔔";var no_bell="🔕";var bookmark="🔖";var link="🔗";var radio_button="🔘";var back="🔙";var end="🔚";var on="🔛";var soon="🔜";var top="🔝";var underage="🔞";var keycap_ten="🔟";var capital_abcd="🔠";var abcd="🔡";var symbols="🔣";var abc="🔤";var fire="🔥";var flashlight="🔦";var wrench="🔧";var hammer="🔨";var nut_and_bolt="🔩";var hocho="🔪";var knife="🔪";var gun="🔫";var microscope="🔬";var telescope="🔭";var crystal_ball="🔮";var six_pointed_star="🔯";var beginner="🔰";var trident="🔱";var black_square_button="🔲";var white_square_button="🔳";var red_circle="🔴";var large_blue_circle="🔵";var large_orange_diamond="🔶";var large_blue_diamond="🔷";var small_orange_diamond="🔸";var small_blue_diamond="🔹";var small_red_triangle="🔺";var small_red_triangle_down="🔻";var arrow_up_small="🔼";var arrow_down_small="🔽";var om_symbol="🕉️";var dove_of_peace="🕊️";var kaaba="🕋";var mosque="🕌";var synagogue="🕍";var menorah_with_nine_branches="🕎";var clock1="🕐";var clock2="🕑";var clock3="🕒";var clock4="🕓";var clock5="🕔";var clock6="🕕";var clock7="🕖";var clock8="🕗";var clock9="🕘";var clock10="🕙";var clock11="🕚";var clock12="🕛";var clock130="🕜";var clock230="🕝";var clock330="🕞";var clock430="🕟";var clock530="🕠";var clock630="🕡";var clock730="🕢";var clock830="🕣";var clock930="🕤";var clock1030="🕥";var clock1130="🕦";var clock1230="🕧";var candle="🕯️";var mantelpiece_clock="🕰️";var hole="🕳️";var man_in_business_suit_levitating="🕴️";var sleuth_or_spy="🕵️‍♂️";var dark_sunglasses="🕶️";var spider="🕷️";var spider_web="🕸️";var joystick="🕹️";var man_dancing="🕺";var linked_paperclips="🖇️";var lower_left_ballpoint_pen="🖊️";var lower_left_fountain_pen="🖋️";var lower_left_paintbrush="🖌️";var lower_left_crayon="🖍️";var raised_hand_with_fingers_splayed="🖐️";var middle_finger="🖕";var reversed_hand_with_middle_finger_extended="🖕";var black_heart="🖤";var desktop_computer="🖥️";var printer="🖨️";var three_button_mouse="🖱️";var trackball="🖲️";var frame_with_picture="🖼️";var card_index_dividers="🗂️";var card_file_box="🗃️";var file_cabinet="🗄️";var wastebasket="🗑️";var spiral_note_pad="🗒️";var spiral_calendar_pad="🗓️";var compression="🗜️";var old_key="🗝️";var rolled_up_newspaper="🗞️";var dagger_knife="🗡️";var speaking_head_in_silhouette="🗣️";var left_speech_bubble="🗨️";var right_anger_bubble="🗯️";var ballot_box_with_ballot="🗳️";var world_map="🗺️";var mount_fuji="🗻";var tokyo_tower="🗼";var statue_of_liberty="🗽";var japan="🗾";var moyai="🗿";var grinning="😀";var grin="😁";var joy="😂";var smiley="😃";var smile="😄";var sweat_smile="😅";var laughing="😆";var satisfied="😆";var innocent="😇";var smiling_imp="😈";var wink="😉";var blush="😊";var yum="😋";var relieved="😌";var heart_eyes="😍";var sunglasses="😎";var smirk="😏";var neutral_face="😐";var expressionless="😑";var unamused="😒";var sweat="😓";var pensive="😔";var confused="😕";var confounded="😖";var kissing="😗";var kissing_heart="😘";var kissing_smiling_eyes="😙";var kissing_closed_eyes="😚";var stuck_out_tongue="😛";var stuck_out_tongue_winking_eye="😜";var stuck_out_tongue_closed_eyes="😝";var disappointed="😞";var worried="😟";var angry="😠";var rage="😡";var cry="😢";var persevere="😣";var triumph="😤";var disappointed_relieved="😥";var frowning="😦";var anguished="😧";var fearful="😨";var weary="😩";var sleepy="😪";var tired_face="😫";var grimacing="😬";var sob="😭";var face_exhaling="😮‍💨";var open_mouth="😮";var hushed="😯";var cold_sweat="😰";var scream="😱";var astonished="😲";var flushed="😳";var sleeping="😴";var face_with_spiral_eyes="😵‍💫";var dizzy_face="😵";var face_in_clouds="😶‍🌫️";var no_mouth="😶";var mask="😷";var smile_cat="😸";var joy_cat="😹";var smiley_cat="😺";var heart_eyes_cat="😻";var smirk_cat="😼";var kissing_cat="😽";var pouting_cat="😾";var crying_cat_face="😿";var scream_cat="🙀";var slightly_frowning_face="🙁";var slightly_smiling_face="🙂";var upside_down_face="🙃";var face_with_rolling_eyes="🙄";var no_good="🙅‍♀️";var ok_woman="🙆‍♀️";var bow="🙇‍♂️";var see_no_evil="🙈";var hear_no_evil="🙉";var speak_no_evil="🙊";var raising_hand="🙋‍♀️";var raised_hands="🙌";var person_frowning="🙍‍♀️";var person_with_pouting_face="🙎‍♀️";var pray="🙏";var rocket="🚀";var helicopter="🚁";var steam_locomotive="🚂";var railway_car="🚃";var bullettrain_side="🚄";var bullettrain_front="🚅";var train2="🚆";var metro="🚇";var light_rail="🚈";var station="🚉";var tram="🚊";var train="🚋";var bus="🚌";var oncoming_bus="🚍";var trolleybus="🚎";var busstop="🚏";var minibus="🚐";var ambulance="🚑";var fire_engine="🚒";var police_car="🚓";var oncoming_police_car="🚔";var taxi="🚕";var oncoming_taxi="🚖";var car="🚗";var red_car="🚗";var oncoming_automobile="🚘";var blue_car="🚙";var truck="🚚";var articulated_lorry="🚛";var tractor="🚜";var monorail="🚝";var mountain_railway="🚞";var suspension_railway="🚟";var mountain_cableway="🚠";var aerial_tramway="🚡";var ship="🚢";var rowboat="🚣‍♂️";var speedboat="🚤";var traffic_light="🚥";var vertical_traffic_light="🚦";var construction="🚧";var rotating_light="🚨";var triangular_flag_on_post="🚩";var door="🚪";var no_entry_sign="🚫";var smoking="🚬";var no_smoking="🚭";var put_litter_in_its_place="🚮";var do_not_litter="🚯";var potable_water="🚰";var bike="🚲";var no_bicycles="🚳";var bicyclist="🚴‍♂️";var mountain_bicyclist="🚵‍♂️";var walking="🚶‍♂️";var no_pedestrians="🚷";var children_crossing="🚸";var mens="🚹";var womens="🚺";var restroom="🚻";var baby_symbol="🚼";var toilet="🚽";var wc="🚾";var shower="🚿";var bath="🛀";var bathtub="🛁";var passport_control="🛂";var customs="🛃";var baggage_claim="🛄";var left_luggage="🛅";var couch_and_lamp="🛋️";var sleeping_accommodation="🛌";var shopping_bags="🛍️";var bellhop_bell="🛎️";var bed="🛏️";var place_of_worship="🛐";var octagonal_sign="🛑";var shopping_trolley="🛒";var hindu_temple="🛕";var hut="🛖";var elevator="🛗";var hammer_and_wrench="🛠️";var shield="🛡️";var oil_drum="🛢️";var motorway="🛣️";var railway_track="🛤️";var motor_boat="🛥️";var small_airplane="🛩️";var airplane_departure="🛫";var airplane_arriving="🛬";var satellite="🛰️";var passenger_ship="🛳️";var scooter="🛴";var motor_scooter="🛵";var canoe="🛶";var sled="🛷";var flying_saucer="🛸";var skateboard="🛹";var auto_rickshaw="🛺";var pickup_truck="🛻";var roller_skate="🛼";var large_orange_circle="🟠";var large_yellow_circle="🟡";var large_green_circle="🟢";var large_purple_circle="🟣";var large_brown_circle="🟤";var large_red_square="🟥";var large_blue_square="🟦";var large_orange_square="🟧";var large_yellow_square="🟨";var large_green_square="🟩";var large_purple_square="🟪";var large_brown_square="🟫";var pinched_fingers="🤌";var white_heart="🤍";var brown_heart="🤎";var pinching_hand="🤏";var zipper_mouth_face="🤐";var money_mouth_face="🤑";var face_with_thermometer="🤒";var nerd_face="🤓";var thinking_face="🤔";var face_with_head_bandage="🤕";var robot_face="🤖";var hugging_face="🤗";var the_horns="🤘";var sign_of_the_horns="🤘";var call_me_hand="🤙";var raised_back_of_hand="🤚";var handshake="🤝";var crossed_fingers="🤞";var hand_with_index_and_middle_fingers_crossed="🤞";var i_love_you_hand_sign="🤟";var face_with_cowboy_hat="🤠";var clown_face="🤡";var nauseated_face="🤢";var rolling_on_the_floor_laughing="🤣";var drooling_face="🤤";var lying_face="🤥";var face_palm="🤦";var sneezing_face="🤧";var face_with_raised_eyebrow="🤨";var face_with_one_eyebrow_raised="🤨";var grinning_face_with_star_eyes="🤩";var zany_face="🤪";var grinning_face_with_one_large_and_one_small_eye="🤪";var shushing_face="🤫";var face_with_finger_covering_closed_lips="🤫";var face_with_symbols_on_mouth="🤬";var serious_face_with_symbols_covering_mouth="🤬";var face_with_hand_over_mouth="🤭";var smiling_face_with_smiling_eyes_and_hand_covering_mouth="🤭";var face_vomiting="🤮";var face_with_open_mouth_vomiting="🤮";var exploding_head="🤯";var shocked_face_with_exploding_head="🤯";var pregnant_woman="🤰";var palms_up_together="🤲";var selfie="🤳";var prince="🤴";var woman_in_tuxedo="🤵‍♀️";var man_in_tuxedo="🤵‍♂️";var person_in_tuxedo="🤵";var mrs_claus="🤶";var mother_christmas="🤶";var shrug="🤷";var person_doing_cartwheel="🤸";var juggling="🤹";var fencer="🤺";var wrestlers="🤼";var water_polo="🤽";var handball="🤾";var diving_mask="🤿";var wilted_flower="🥀";var drum_with_drumsticks="🥁";var clinking_glasses="🥂";var tumbler_glass="🥃";var spoon="🥄";var goal_net="🥅";var first_place_medal="🥇";var second_place_medal="🥈";var third_place_medal="🥉";var boxing_glove="🥊";var martial_arts_uniform="🥋";var curling_stone="🥌";var lacrosse="🥍";var softball="🥎";var flying_disc="🥏";var croissant="🥐";var avocado="🥑";var cucumber="🥒";var bacon="🥓";var potato="🥔";var carrot="🥕";var baguette_bread="🥖";var green_salad="🥗";var shallow_pan_of_food="🥘";var stuffed_flatbread="🥙";var egg="🥚";var glass_of_milk="🥛";var peanuts="🥜";var kiwifruit="🥝";var pancakes="🥞";var dumpling="🥟";var fortune_cookie="🥠";var takeout_box="🥡";var chopsticks="🥢";var bowl_with_spoon="🥣";var cup_with_straw="🥤";var coconut="🥥";var broccoli="🥦";var pie="🥧";var pretzel="🥨";var cut_of_meat="🥩";var sandwich="🥪";var canned_food="🥫";var leafy_green="🥬";var mango="🥭";var moon_cake="🥮";var bagel="🥯";var smiling_face_with_3_hearts="🥰";var yawning_face="🥱";var smiling_face_with_tear="🥲";var partying_face="🥳";var woozy_face="🥴";var hot_face="🥵";var cold_face="🥶";var ninja="🥷";var disguised_face="🥸";var pleading_face="🥺";var sari="🥻";var lab_coat="🥼";var goggles="🥽";var hiking_boot="🥾";var womans_flat_shoe="🥿";var crab="🦀";var lion_face="🦁";var scorpion="🦂";var turkey="🦃";var unicorn_face="🦄";var eagle="🦅";var duck="🦆";var bat="🦇";var shark="🦈";var owl="🦉";var fox_face="🦊";var butterfly="🦋";var deer="🦌";var gorilla="🦍";var lizard="🦎";var rhinoceros="🦏";var shrimp="🦐";var squid="🦑";var giraffe_face="🦒";var zebra_face="🦓";var hedgehog="🦔";var sauropod="🦕";var cricket="🦗";var kangaroo="🦘";var llama="🦙";var peacock="🦚";var hippopotamus="🦛";var parrot="🦜";var raccoon="🦝";var lobster="🦞";var mosquito="🦟";var microbe="🦠";var badger="🦡";var swan="🦢";var mammoth="🦣";var dodo="🦤";var sloth="🦥";var otter="🦦";var orangutan="🦧";var skunk="🦨";var flamingo="🦩";var oyster="🦪";var beaver="🦫";var bison="🦬";var seal="🦭";var guide_dog="🦮";var probing_cane="🦯";var bone="🦴";var leg="🦵";var foot="🦶";var tooth="🦷";var female_superhero="🦸‍♀️";var male_superhero="🦸‍♂️";var superhero="🦸";var female_supervillain="🦹‍♀️";var male_supervillain="🦹‍♂️";var supervillain="🦹";var safety_vest="🦺";var ear_with_hearing_aid="🦻";var motorized_wheelchair="🦼";var manual_wheelchair="🦽";var mechanical_arm="🦾";var mechanical_leg="🦿";var cheese_wedge="🧀";var cupcake="🧁";var salt="🧂";var beverage_box="🧃";var garlic="🧄";var onion="🧅";var falafel="🧆";var waffle="🧇";var butter="🧈";var mate_drink="🧉";var ice_cube="🧊";var bubble_tea="🧋";var woman_standing="🧍‍♀️";var man_standing="🧍‍♂️";var standing_person="🧍";var woman_kneeling="🧎‍♀️";var man_kneeling="🧎‍♂️";var kneeling_person="🧎";var deaf_woman="🧏‍♀️";var deaf_man="🧏‍♂️";var deaf_person="🧏";var face_with_monocle="🧐";var farmer="🧑‍🌾";var cook="🧑‍🍳";var person_feeding_baby="🧑‍🍼";var mx_claus="🧑‍🎄";var student="🧑‍🎓";var singer="🧑‍🎤";var artist="🧑‍🎨";var teacher="🧑‍🏫";var factory_worker="🧑‍🏭";var technologist="🧑‍💻";var office_worker="🧑‍💼";var mechanic="🧑‍🔧";var scientist="🧑‍🔬";var astronaut="🧑‍🚀";var firefighter="🧑‍🚒";var people_holding_hands="🧑‍🤝‍🧑";var person_with_probing_cane="🧑‍🦯";var red_haired_person="🧑‍🦰";var curly_haired_person="🧑‍🦱";var bald_person="🧑‍🦲";var white_haired_person="🧑‍🦳";var person_in_motorized_wheelchair="🧑‍🦼";var person_in_manual_wheelchair="🧑‍🦽";var health_worker="🧑‍⚕️";var judge="🧑‍⚖️";var pilot="🧑‍✈️";var adult="🧑";var child="🧒";var older_adult="🧓";var woman_with_beard="🧔‍♀️";var man_with_beard="🧔‍♂️";var bearded_person="🧔";var person_with_headscarf="🧕";var woman_in_steamy_room="🧖‍♀️";var man_in_steamy_room="🧖‍♂️";var person_in_steamy_room="🧖‍♂️";var woman_climbing="🧗‍♀️";var person_climbing="🧗‍♀️";var man_climbing="🧗‍♂️";var woman_in_lotus_position="🧘‍♀️";var person_in_lotus_position="🧘‍♀️";var man_in_lotus_position="🧘‍♂️";var female_mage="🧙‍♀️";var mage="🧙‍♀️";var male_mage="🧙‍♂️";var female_fairy="🧚‍♀️";var fairy="🧚‍♀️";var male_fairy="🧚‍♂️";var female_vampire="🧛‍♀️";var vampire="🧛‍♀️";var male_vampire="🧛‍♂️";var mermaid="🧜‍♀️";var merman="🧜‍♂️";var merperson="🧜‍♂️";var female_elf="🧝‍♀️";var male_elf="🧝‍♂️";var elf="🧝‍♂️";var female_genie="🧞‍♀️";var male_genie="🧞‍♂️";var genie="🧞‍♂️";var female_zombie="🧟‍♀️";var male_zombie="🧟‍♂️";var zombie="🧟‍♂️";var brain="🧠";var orange_heart="🧡";var billed_cap="🧢";var scarf="🧣";var gloves="🧤";var coat="🧥";var socks="🧦";var red_envelope="🧧";var firecracker="🧨";var jigsaw="🧩";var test_tube="🧪";var petri_dish="🧫";var dna="🧬";var compass="🧭";var abacus="🧮";var fire_extinguisher="🧯";var toolbox="🧰";var bricks="🧱";var magnet="🧲";var luggage="🧳";var lotion_bottle="🧴";var thread="🧵";var yarn="🧶";var safety_pin="🧷";var teddy_bear="🧸";var broom="🧹";var basket="🧺";var roll_of_paper="🧻";var soap="🧼";var sponge="🧽";var receipt="🧾";var nazar_amulet="🧿";var ballet_shoes="🩰";var briefs="🩲";var shorts="🩳";var thong_sandal="🩴";var drop_of_blood="🩸";var adhesive_bandage="🩹";var stethoscope="🩺";var kite="🪁";var parachute="🪂";var boomerang="🪃";var magic_wand="🪄";var pinata="🪅";var nesting_dolls="🪆";var ringed_planet="🪐";var chair="🪑";var razor="🪒";var axe="🪓";var diya_lamp="🪔";var banjo="🪕";var military_helmet="🪖";var accordion="🪗";var long_drum="🪘";var coin="🪙";var carpentry_saw="🪚";var screwdriver="🪛";var ladder="🪜";var hook="🪝";var mirror="🪞";var globalThis="🪟";var plunger="🪠";var sewing_needle="🪡";var knot="🪢";var bucket="🪣";var mouse_trap="🪤";var toothbrush="🪥";var headstone="🪦";var placard="🪧";var rock="🪨";var fly="🪰";var worm="🪱";var beetle="🪲";var cockroach="🪳";var potted_plant="🪴";var wood="🪵";var feather="🪶";var anatomical_heart="🫀";var lungs="🫁";var people_hugging="🫂";var blueberries="🫐";var bell_pepper="🫑";var olive="🫒";var flatbread="🫓";var tamale="🫔";var fondue="🫕";var teapot="🫖";var bangbang="‼️";var interrobang="⁉️";var tm="™️";var information_source="ℹ️";var left_right_arrow="↔️";var arrow_up_down="↕️";var arrow_upper_left="↖️";var arrow_upper_right="↗️";var arrow_lower_right="↘️";var arrow_lower_left="↙️";var leftwards_arrow_with_hook="↩️";var arrow_right_hook="↪️";var watch="⌚";var hourglass="⌛";var keyboard="⌨️";var eject="⏏️";var fast_forward="⏩";var rewind="⏪";var arrow_double_up="⏫";var arrow_double_down="⏬";var black_right_pointing_double_triangle_with_vertical_bar="⏭️";var black_left_pointing_double_triangle_with_vertical_bar="⏮️";var black_right_pointing_triangle_with_double_vertical_bar="⏯️";var alarm_clock="⏰";var stopwatch="⏱️";var timer_clock="⏲️";var hourglass_flowing_sand="⏳";var double_vertical_bar="⏸️";var black_square_for_stop="⏹️";var black_circle_for_record="⏺️";var m="Ⓜ️";var black_small_square="▪️";var white_small_square="▫️";var arrow_forward="▶️";var arrow_backward="◀️";var white_medium_square="◻️";var black_medium_square="◼️";var white_medium_small_square="◽";var black_medium_small_square="◾";var sunny="☀️";var cloud="☁️";var umbrella="☂️";var snowman="☃️";var comet="☄️";var phone="☎️";var telephone="☎️";var ballot_box_with_check="☑️";var shamrock="☘️";var point_up="☝️";var skull_and_crossbones="☠️";var radioactive_sign="☢️";var biohazard_sign="☣️";var orthodox_cross="☦️";var star_and_crescent="☪️";var peace_symbol="☮️";var yin_yang="☯️";var wheel_of_dharma="☸️";var white_frowning_face="☹️";var relaxed="☺️";var female_sign="♀️";var male_sign="♂️";var gemini="♊";var cancer="♋";var leo="♌";var virgo="♍";var libra="♎";var scorpius="♏";var chess_pawn="♟️";var spades="♠️";var clubs="♣️";var hearts="♥️";var diamonds="♦️";var hotsprings="♨️";var recycle="♻️";var infinity="♾️";var wheelchair="♿";var hammer_and_pick="⚒️";var crossed_swords="⚔️";var medical_symbol="⚕️";var staff_of_aesculapius="⚕️";var scales="⚖️";var alembic="⚗️";var gear="⚙️";var atom_symbol="⚛️";var fleur_de_lis="⚜️";var warning="⚠️";var zap="⚡";var transgender_symbol="⚧️";var white_circle="⚪";var black_circle="⚫";var coffin="⚰️";var funeral_urn="⚱️";var soccer="⚽";var baseball="⚾";var snowman_without_snow="⛄";var partly_sunny="⛅";var thunder_cloud_and_rain="⛈️";var ophiuchus="⛎";var pick="⛏️";var helmet_with_white_cross="⛑️";var chains="⛓️";var no_entry="⛔";var shinto_shrine="⛩️";var church="⛪";var mountain="⛰️";var umbrella_on_ground="⛱️";var fountain="⛲";var golf="⛳";var ferry="⛴️";var boat="⛵";var sailboat="⛵";var skier="⛷️";var ice_skate="⛸️";var person_with_ball="⛹️‍♂️";var tent="⛺";var fuelpump="⛽";var scissors="✂️";var airplane="✈️";var email="✉️";var envelope="✉️";var fist="✊";var hand="✋";var raised_hand="✋";var v="✌️";var writing_hand="✍️";var pencil2="✏️";var black_nib="✒️";var heavy_check_mark="✔️";var heavy_multiplication_x="✖️";var latin_cross="✝️";var star_of_david="✡️";var eight_spoked_asterisk="✳️";var eight_pointed_black_star="✴️";var snowflake="❄️";var sparkle="❇️";var x="❌";var negative_squared_cross_mark="❎";var heavy_heart_exclamation_mark_ornament="❣️";var heart_on_fire="❤️‍🔥";var mending_heart="❤️‍🩹";var heart="❤️";var arrow_right="➡️";var curly_loop="➰";var loop="➿";var arrow_heading_up="⤴️";var arrow_heading_down="⤵️";var arrow_left="⬅️";var arrow_up="⬆️";var arrow_down="⬇️";var black_large_square="⬛";var white_large_square="⬜";var star="⭐";var o="⭕";var wavy_dash="〰️";var part_alternation_mark="〽️";var congratulations="㊗️";var secret="㊙️";var require$$1 = {"100":"💯","1234":"🔢",umbrella_with_rain_drops:umbrella_with_rain_drops,coffee:coffee,aries:aries,taurus:taurus,sagittarius:sagittarius,capricorn:capricorn,aquarius:aquarius,pisces:pisces,anchor:anchor,white_check_mark:white_check_mark,sparkles:sparkles,question:question,grey_question:grey_question,grey_exclamation:grey_exclamation,exclamation:exclamation,heavy_exclamation_mark:heavy_exclamation_mark,heavy_plus_sign:heavy_plus_sign,heavy_minus_sign:heavy_minus_sign,heavy_division_sign:heavy_division_sign,hash:hash,keycap_star:keycap_star,zero:zero,one:one,two:two,three:three,four:four,five:five,six:six,seven:seven,eight:eight,nine:nine,copyright:copyright,registered:registered,mahjong:mahjong,black_joker:black_joker,a:a,b:b,o2:o2,parking:parking,ab:ab,cl:cl,cool:cool,free:free,id:id,"new":"🆕",ng:ng,ok:ok,sos:sos,up:up,vs:vs,"flag-ac":"🇦🇨","flag-ad":"🇦🇩","flag-ae":"🇦🇪","flag-af":"🇦🇫","flag-ag":"🇦🇬","flag-ai":"🇦🇮","flag-al":"🇦🇱","flag-am":"🇦🇲","flag-ao":"🇦🇴","flag-aq":"🇦🇶","flag-ar":"🇦🇷","flag-as":"🇦🇸","flag-at":"🇦🇹","flag-au":"🇦🇺","flag-aw":"🇦🇼","flag-ax":"🇦🇽","flag-az":"🇦🇿","flag-ba":"🇧🇦","flag-bb":"🇧🇧","flag-bd":"🇧🇩","flag-be":"🇧🇪","flag-bf":"🇧🇫","flag-bg":"🇧🇬","flag-bh":"🇧🇭","flag-bi":"🇧🇮","flag-bj":"🇧🇯","flag-bl":"🇧🇱","flag-bm":"🇧🇲","flag-bn":"🇧🇳","flag-bo":"🇧🇴","flag-bq":"🇧🇶","flag-br":"🇧🇷","flag-bs":"🇧🇸","flag-bt":"🇧🇹","flag-bv":"🇧🇻","flag-bw":"🇧🇼","flag-by":"🇧🇾","flag-bz":"🇧🇿","flag-ca":"🇨🇦","flag-cc":"🇨🇨","flag-cd":"🇨🇩","flag-cf":"🇨🇫","flag-cg":"🇨🇬","flag-ch":"🇨🇭","flag-ci":"🇨🇮","flag-ck":"🇨🇰","flag-cl":"🇨🇱","flag-cm":"🇨🇲",cn:cn,"flag-cn":"🇨🇳","flag-co":"🇨🇴","flag-cp":"🇨🇵","flag-cr":"🇨🇷","flag-cu":"🇨🇺","flag-cv":"🇨🇻","flag-cw":"🇨🇼","flag-cx":"🇨🇽","flag-cy":"🇨🇾","flag-cz":"🇨🇿",de:de,"flag-de":"🇩🇪","flag-dg":"🇩🇬","flag-dj":"🇩🇯","flag-dk":"🇩🇰","flag-dm":"🇩🇲","flag-do":"🇩🇴","flag-dz":"🇩🇿","flag-ea":"🇪🇦","flag-ec":"🇪🇨","flag-ee":"🇪🇪","flag-eg":"🇪🇬","flag-eh":"🇪🇭","flag-er":"🇪🇷",es:es,"flag-es":"🇪🇸","flag-et":"🇪🇹","flag-eu":"🇪🇺","flag-fi":"🇫🇮","flag-fj":"🇫🇯","flag-fk":"🇫🇰","flag-fm":"🇫🇲","flag-fo":"🇫🇴",fr:fr,"flag-fr":"🇫🇷","flag-ga":"🇬🇦",gb:gb,uk:uk,"flag-gb":"🇬🇧","flag-gd":"🇬🇩","flag-ge":"🇬🇪","flag-gf":"🇬🇫","flag-gg":"🇬🇬","flag-gh":"🇬🇭","flag-gi":"🇬🇮","flag-gl":"🇬🇱","flag-gm":"🇬🇲","flag-gn":"🇬🇳","flag-gp":"🇬🇵","flag-gq":"🇬🇶","flag-gr":"🇬🇷","flag-gs":"🇬🇸","flag-gt":"🇬🇹","flag-gu":"🇬🇺","flag-gw":"🇬🇼","flag-gy":"🇬🇾","flag-hk":"🇭🇰","flag-hm":"🇭🇲","flag-hn":"🇭🇳","flag-hr":"🇭🇷","flag-ht":"🇭🇹","flag-hu":"🇭🇺","flag-ic":"🇮🇨","flag-id":"🇮🇩","flag-ie":"🇮🇪","flag-il":"🇮🇱","flag-im":"🇮🇲","flag-in":"🇮🇳","flag-io":"🇮🇴","flag-iq":"🇮🇶","flag-ir":"🇮🇷","flag-is":"🇮🇸",it:it,"flag-it":"🇮🇹","flag-je":"🇯🇪","flag-jm":"🇯🇲","flag-jo":"🇯🇴",jp:jp,"flag-jp":"🇯🇵","flag-ke":"🇰🇪","flag-kg":"🇰🇬","flag-kh":"🇰🇭","flag-ki":"🇰🇮","flag-km":"🇰🇲","flag-kn":"🇰🇳","flag-kp":"🇰🇵",kr:kr,"flag-kr":"🇰🇷","flag-kw":"🇰🇼","flag-ky":"🇰🇾","flag-kz":"🇰🇿","flag-la":"🇱🇦","flag-lb":"🇱🇧","flag-lc":"🇱🇨","flag-li":"🇱🇮","flag-lk":"🇱🇰","flag-lr":"🇱🇷","flag-ls":"🇱🇸","flag-lt":"🇱🇹","flag-lu":"🇱🇺","flag-lv":"🇱🇻","flag-ly":"🇱🇾","flag-ma":"🇲🇦","flag-mc":"🇲🇨","flag-md":"🇲🇩","flag-me":"🇲🇪","flag-mf":"🇲🇫","flag-mg":"🇲🇬","flag-mh":"🇲🇭","flag-mk":"🇲🇰","flag-ml":"🇲🇱","flag-mm":"🇲🇲","flag-mn":"🇲🇳","flag-mo":"🇲🇴","flag-mp":"🇲🇵","flag-mq":"🇲🇶","flag-mr":"🇲🇷","flag-ms":"🇲🇸","flag-mt":"🇲🇹","flag-mu":"🇲🇺","flag-mv":"🇲🇻","flag-mw":"🇲🇼","flag-mx":"🇲🇽","flag-my":"🇲🇾","flag-mz":"🇲🇿","flag-na":"🇳🇦","flag-nc":"🇳🇨","flag-ne":"🇳🇪","flag-nf":"🇳🇫","flag-ng":"🇳🇬","flag-ni":"🇳🇮","flag-nl":"🇳🇱","flag-no":"🇳🇴","flag-np":"🇳🇵","flag-nr":"🇳🇷","flag-nu":"🇳🇺","flag-nz":"🇳🇿","flag-om":"🇴🇲","flag-pa":"🇵🇦","flag-pe":"🇵🇪","flag-pf":"🇵🇫","flag-pg":"🇵🇬","flag-ph":"🇵🇭","flag-pk":"🇵🇰","flag-pl":"🇵🇱","flag-pm":"🇵🇲","flag-pn":"🇵🇳","flag-pr":"🇵🇷","flag-ps":"🇵🇸","flag-pt":"🇵🇹","flag-pw":"🇵🇼","flag-py":"🇵🇾","flag-qa":"🇶🇦","flag-re":"🇷🇪","flag-ro":"🇷🇴","flag-rs":"🇷🇸",ru:ru,"flag-ru":"🇷🇺","flag-rw":"🇷🇼","flag-sa":"🇸🇦","flag-sb":"🇸🇧","flag-sc":"🇸🇨","flag-sd":"🇸🇩","flag-se":"🇸🇪","flag-sg":"🇸🇬","flag-sh":"🇸🇭","flag-si":"🇸🇮","flag-sj":"🇸🇯","flag-sk":"🇸🇰","flag-sl":"🇸🇱","flag-sm":"🇸🇲","flag-sn":"🇸🇳","flag-so":"🇸🇴","flag-sr":"🇸🇷","flag-ss":"🇸🇸","flag-st":"🇸🇹","flag-sv":"🇸🇻","flag-sx":"🇸🇽","flag-sy":"🇸🇾","flag-sz":"🇸🇿","flag-ta":"🇹🇦","flag-tc":"🇹🇨","flag-td":"🇹🇩","flag-tf":"🇹🇫","flag-tg":"🇹🇬","flag-th":"🇹🇭","flag-tj":"🇹🇯","flag-tk":"🇹🇰","flag-tl":"🇹🇱","flag-tm":"🇹🇲","flag-tn":"🇹🇳","flag-to":"🇹🇴","flag-tr":"🇹🇷","flag-tt":"🇹🇹","flag-tv":"🇹🇻","flag-tw":"🇹🇼","flag-tz":"🇹🇿","flag-ua":"🇺🇦","flag-ug":"🇺🇬","flag-um":"🇺🇲","flag-un":"🇺🇳",us:us,"flag-us":"🇺🇸","flag-uy":"🇺🇾","flag-uz":"🇺🇿","flag-va":"🇻🇦","flag-vc":"🇻🇨","flag-ve":"🇻🇪","flag-vg":"🇻🇬","flag-vi":"🇻🇮","flag-vn":"🇻🇳","flag-vu":"🇻🇺","flag-wf":"🇼🇫","flag-ws":"🇼🇸","flag-xk":"🇽🇰","flag-ye":"🇾🇪","flag-yt":"🇾🇹","flag-za":"🇿🇦","flag-zm":"🇿🇲","flag-zw":"🇿🇼",koko:koko,sa:sa,u7121:u7121,u6307:u6307,u7981:u7981,u7a7a:u7a7a,u5408:u5408,u6e80:u6e80,u6709:u6709,u6708:u6708,u7533:u7533,u5272:u5272,u55b6:u55b6,ideograph_advantage:ideograph_advantage,accept:accept,cyclone:cyclone,foggy:foggy,closed_umbrella:closed_umbrella,night_with_stars:night_with_stars,sunrise_over_mountains:sunrise_over_mountains,sunrise:sunrise,city_sunset:city_sunset,city_sunrise:city_sunrise,rainbow:rainbow,bridge_at_night:bridge_at_night,ocean:ocean,volcano:volcano,milky_way:milky_way,earth_africa:earth_africa,earth_americas:earth_americas,earth_asia:earth_asia,globe_with_meridians:globe_with_meridians,new_moon:new_moon,waxing_crescent_moon:waxing_crescent_moon,first_quarter_moon:first_quarter_moon,moon:moon,waxing_gibbous_moon:waxing_gibbous_moon,full_moon:full_moon,waning_gibbous_moon:waning_gibbous_moon,last_quarter_moon:last_quarter_moon,waning_crescent_moon:waning_crescent_moon,crescent_moon:crescent_moon,new_moon_with_face:new_moon_with_face,first_quarter_moon_with_face:first_quarter_moon_with_face,last_quarter_moon_with_face:last_quarter_moon_with_face,full_moon_with_face:full_moon_with_face,sun_with_face:sun_with_face,star2:star2,stars:stars,thermometer:thermometer,mostly_sunny:mostly_sunny,sun_small_cloud:sun_small_cloud,barely_sunny:barely_sunny,sun_behind_cloud:sun_behind_cloud,partly_sunny_rain:partly_sunny_rain,sun_behind_rain_cloud:sun_behind_rain_cloud,rain_cloud:rain_cloud,snow_cloud:snow_cloud,lightning:lightning,lightning_cloud:lightning_cloud,tornado:tornado,tornado_cloud:tornado_cloud,fog:fog,wind_blowing_face:wind_blowing_face,hotdog:hotdog,taco:taco,burrito:burrito,chestnut:chestnut,seedling:seedling,evergreen_tree:evergreen_tree,deciduous_tree:deciduous_tree,palm_tree:palm_tree,cactus:cactus,hot_pepper:hot_pepper,tulip:tulip,cherry_blossom:cherry_blossom,rose:rose,hibiscus:hibiscus,sunflower:sunflower,blossom:blossom,corn:corn,ear_of_rice:ear_of_rice,herb:herb,four_leaf_clover:four_leaf_clover,maple_leaf:maple_leaf,fallen_leaf:fallen_leaf,leaves:leaves,mushroom:mushroom,tomato:tomato,eggplant:eggplant,grapes:grapes,melon:melon,watermelon:watermelon,tangerine:tangerine,lemon:lemon,banana:banana,pineapple:pineapple,apple:apple,green_apple:green_apple,pear:pear,peach:peach,cherries:cherries,strawberry:strawberry,hamburger:hamburger,pizza:pizza,meat_on_bone:meat_on_bone,poultry_leg:poultry_leg,rice_cracker:rice_cracker,rice_ball:rice_ball,rice:rice,curry:curry,ramen:ramen,spaghetti:spaghetti,bread:bread,fries:fries,sweet_potato:sweet_potato,dango:dango,oden:oden,sushi:sushi,fried_shrimp:fried_shrimp,fish_cake:fish_cake,icecream:icecream,shaved_ice:shaved_ice,ice_cream:ice_cream,doughnut:doughnut,cookie:cookie,chocolate_bar:chocolate_bar,candy:candy,lollipop:lollipop,custard:custard,honey_pot:honey_pot,cake:cake,bento:bento,stew:stew,fried_egg:fried_egg,cooking:cooking,fork_and_knife:fork_and_knife,tea:tea,sake:sake,wine_glass:wine_glass,cocktail:cocktail,tropical_drink:tropical_drink,beer:beer,beers:beers,baby_bottle:baby_bottle,knife_fork_plate:knife_fork_plate,champagne:champagne,popcorn:popcorn,ribbon:ribbon,gift:gift,birthday:birthday,jack_o_lantern:jack_o_lantern,christmas_tree:christmas_tree,santa:santa,fireworks:fireworks,sparkler:sparkler,balloon:balloon,tada:tada,confetti_ball:confetti_ball,tanabata_tree:tanabata_tree,crossed_flags:crossed_flags,bamboo:bamboo,dolls:dolls,flags:flags,wind_chime:wind_chime,rice_scene:rice_scene,school_satchel:school_satchel,mortar_board:mortar_board,medal:medal,reminder_ribbon:reminder_ribbon,studio_microphone:studio_microphone,level_slider:level_slider,control_knobs:control_knobs,film_frames:film_frames,admission_tickets:admission_tickets,carousel_horse:carousel_horse,ferris_wheel:ferris_wheel,roller_coaster:roller_coaster,fishing_pole_and_fish:fishing_pole_and_fish,microphone:microphone,movie_camera:movie_camera,cinema:cinema,headphones:headphones,art:art,tophat:tophat,circus_tent:circus_tent,ticket:ticket,clapper:clapper,performing_arts:performing_arts,video_game:video_game,dart:dart,slot_machine:slot_machine,"8ball":"🎱",game_die:game_die,bowling:bowling,flower_playing_cards:flower_playing_cards,musical_note:musical_note,notes:notes,saxophone:saxophone,guitar:guitar,musical_keyboard:musical_keyboard,trumpet:trumpet,violin:violin,musical_score:musical_score,running_shirt_with_sash:running_shirt_with_sash,tennis:tennis,ski:ski,basketball:basketball,checkered_flag:checkered_flag,snowboarder:snowboarder,"woman-running":"🏃‍♀️","man-running":"🏃‍♂️",runner:runner,running:running,"woman-surfing":"🏄‍♀️","man-surfing":"🏄‍♂️",surfer:surfer,sports_medal:sports_medal,trophy:trophy,horse_racing:horse_racing,football:football,rugby_football:rugby_football,"woman-swimming":"🏊‍♀️","man-swimming":"🏊‍♂️",swimmer:swimmer,"woman-lifting-weights":"🏋️‍♀️","man-lifting-weights":"🏋️‍♂️",weight_lifter:weight_lifter,"woman-golfing":"🏌️‍♀️","man-golfing":"🏌️‍♂️",golfer:golfer,racing_motorcycle:racing_motorcycle,racing_car:racing_car,cricket_bat_and_ball:cricket_bat_and_ball,volleyball:volleyball,field_hockey_stick_and_ball:field_hockey_stick_and_ball,ice_hockey_stick_and_puck:ice_hockey_stick_and_puck,table_tennis_paddle_and_ball:table_tennis_paddle_and_ball,snow_capped_mountain:snow_capped_mountain,camping:camping,beach_with_umbrella:beach_with_umbrella,building_construction:building_construction,house_buildings:house_buildings,cityscape:cityscape,derelict_house_building:derelict_house_building,classical_building:classical_building,desert:desert,desert_island:desert_island,national_park:national_park,stadium:stadium,house:house,house_with_garden:house_with_garden,office:office,post_office:post_office,european_post_office:european_post_office,hospital:hospital,bank:bank,atm:atm,hotel:hotel,love_hotel:love_hotel,convenience_store:convenience_store,school:school,department_store:department_store,factory:factory,izakaya_lantern:izakaya_lantern,lantern:lantern,japanese_castle:japanese_castle,european_castle:european_castle,"rainbow-flag":"🏳️‍🌈",transgender_flag:transgender_flag,waving_white_flag:waving_white_flag,pirate_flag:pirate_flag,"flag-england":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","flag-scotland":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","flag-wales":"🏴󠁧󠁢󠁷󠁬󠁳󠁿",waving_black_flag:waving_black_flag,rosette:rosette,label:label,badminton_racquet_and_shuttlecock:badminton_racquet_and_shuttlecock,bow_and_arrow:bow_and_arrow,amphora:amphora,"skin-tone-2":"🏻","skin-tone-3":"🏼","skin-tone-4":"🏽","skin-tone-5":"🏾","skin-tone-6":"🏿",rat:rat,mouse2:mouse2,ox:ox,water_buffalo:water_buffalo,cow2:cow2,tiger2:tiger2,leopard:leopard,rabbit2:rabbit2,black_cat:black_cat,cat2:cat2,dragon:dragon,crocodile:crocodile,whale2:whale2,snail:snail,snake:snake,racehorse:racehorse,ram:ram,goat:goat,sheep:sheep,monkey:monkey,rooster:rooster,chicken:chicken,service_dog:service_dog,dog2:dog2,pig2:pig2,boar:boar,elephant:elephant,octopus:octopus,shell:shell,bug:bug,ant:ant,bee:bee,honeybee:honeybee,ladybug:ladybug,lady_beetle:lady_beetle,fish:fish,tropical_fish:tropical_fish,blowfish:blowfish,turtle:turtle,hatching_chick:hatching_chick,baby_chick:baby_chick,hatched_chick:hatched_chick,bird:bird,penguin:penguin,koala:koala,poodle:poodle,dromedary_camel:dromedary_camel,camel:camel,dolphin:dolphin,flipper:flipper,mouse:mouse,cow:cow,tiger:tiger,rabbit:rabbit,cat:cat,dragon_face:dragon_face,whale:whale,horse:horse,monkey_face:monkey_face,dog:dog,pig:pig,frog:frog,hamster:hamster,wolf:wolf,polar_bear:polar_bear,bear:bear,panda_face:panda_face,pig_nose:pig_nose,feet:feet,paw_prints:paw_prints,chipmunk:chipmunk,eyes:eyes,"eye-in-speech-bubble":"👁️‍🗨️",eye:eye,ear:ear,nose:nose,lips:lips,tongue:tongue,point_up_2:point_up_2,point_down:point_down,point_left:point_left,point_right:point_right,facepunch:facepunch,punch:punch,wave:wave,ok_hand:ok_hand,"+1":"👍",thumbsup:thumbsup,"-1":"👎",thumbsdown:thumbsdown,clap:clap,open_hands:open_hands,crown:crown,womans_hat:womans_hat,eyeglasses:eyeglasses,necktie:necktie,shirt:shirt,tshirt:tshirt,jeans:jeans,dress:dress,kimono:kimono,bikini:bikini,womans_clothes:womans_clothes,purse:purse,handbag:handbag,pouch:pouch,mans_shoe:mans_shoe,shoe:shoe,athletic_shoe:athletic_shoe,high_heel:high_heel,sandal:sandal,boot:boot,footprints:footprints,bust_in_silhouette:bust_in_silhouette,busts_in_silhouette:busts_in_silhouette,boy:boy,girl:girl,"male-farmer":"👨‍🌾","male-cook":"👨‍🍳",man_feeding_baby:man_feeding_baby,"male-student":"👨‍🎓","male-singer":"👨‍🎤","male-artist":"👨‍🎨","male-teacher":"👨‍🏫","male-factory-worker":"👨‍🏭","man-boy-boy":"👨‍👦‍👦","man-boy":"👨‍👦","man-girl-boy":"👨‍👧‍👦","man-girl-girl":"👨‍👧‍👧","man-girl":"👨‍👧","man-man-boy":"👨‍👨‍👦","man-man-boy-boy":"👨‍👨‍👦‍👦","man-man-girl":"👨‍👨‍👧","man-man-girl-boy":"👨‍👨‍👧‍👦","man-man-girl-girl":"👨‍👨‍👧‍👧","man-woman-boy":"👨‍👩‍👦",family:family,"man-woman-boy-boy":"👨‍👩‍👦‍👦","man-woman-girl":"👨‍👩‍👧","man-woman-girl-boy":"👨‍👩‍👧‍👦","man-woman-girl-girl":"👨‍👩‍👧‍👧","male-technologist":"👨‍💻","male-office-worker":"👨‍💼","male-mechanic":"👨‍🔧","male-scientist":"👨‍🔬","male-astronaut":"👨‍🚀","male-firefighter":"👨‍🚒",man_with_probing_cane:man_with_probing_cane,red_haired_man:red_haired_man,curly_haired_man:curly_haired_man,bald_man:bald_man,white_haired_man:white_haired_man,man_in_motorized_wheelchair:man_in_motorized_wheelchair,man_in_manual_wheelchair:man_in_manual_wheelchair,"male-doctor":"👨‍⚕️","male-judge":"👨‍⚖️","male-pilot":"👨‍✈️","man-heart-man":"👨‍❤️‍👨","man-kiss-man":"👨‍❤️‍💋‍👨",man:man,"female-farmer":"👩‍🌾","female-cook":"👩‍🍳",woman_feeding_baby:woman_feeding_baby,"female-student":"👩‍🎓","female-singer":"👩‍🎤","female-artist":"👩‍🎨","female-teacher":"👩‍🏫","female-factory-worker":"👩‍🏭","woman-boy-boy":"👩‍👦‍👦","woman-boy":"👩‍👦","woman-girl-boy":"👩‍👧‍👦","woman-girl-girl":"👩‍👧‍👧","woman-girl":"👩‍👧","woman-woman-boy":"👩‍👩‍👦","woman-woman-boy-boy":"👩‍👩‍👦‍👦","woman-woman-girl":"👩‍👩‍👧","woman-woman-girl-boy":"👩‍👩‍👧‍👦","woman-woman-girl-girl":"👩‍👩‍👧‍👧","female-technologist":"👩‍💻","female-office-worker":"👩‍💼","female-mechanic":"👩‍🔧","female-scientist":"👩‍🔬","female-astronaut":"👩‍🚀","female-firefighter":"👩‍🚒",woman_with_probing_cane:woman_with_probing_cane,red_haired_woman:red_haired_woman,curly_haired_woman:curly_haired_woman,bald_woman:bald_woman,white_haired_woman:white_haired_woman,woman_in_motorized_wheelchair:woman_in_motorized_wheelchair,woman_in_manual_wheelchair:woman_in_manual_wheelchair,"female-doctor":"👩‍⚕️","female-judge":"👩‍⚖️","female-pilot":"👩‍✈️","woman-heart-man":"👩‍❤️‍👨","woman-heart-woman":"👩‍❤️‍👩","woman-kiss-man":"👩‍❤️‍💋‍👨","woman-kiss-woman":"👩‍❤️‍💋‍👩",woman:woman,man_and_woman_holding_hands:man_and_woman_holding_hands,woman_and_man_holding_hands:woman_and_man_holding_hands,couple:couple,two_men_holding_hands:two_men_holding_hands,men_holding_hands:men_holding_hands,two_women_holding_hands:two_women_holding_hands,women_holding_hands:women_holding_hands,"female-police-officer":"👮‍♀️","male-police-officer":"👮‍♂️",cop:cop,"women-with-bunny-ears-partying":"👯‍♀️","woman-with-bunny-ears-partying":"👯‍♀️",dancers:dancers,"men-with-bunny-ears-partying":"👯‍♂️","man-with-bunny-ears-partying":"👯‍♂️",woman_with_veil:woman_with_veil,man_with_veil:man_with_veil,bride_with_veil:bride_with_veil,"blond-haired-woman":"👱‍♀️","blond-haired-man":"👱‍♂️",person_with_blond_hair:person_with_blond_hair,man_with_gua_pi_mao:man_with_gua_pi_mao,"woman-wearing-turban":"👳‍♀️","man-wearing-turban":"👳‍♂️",man_with_turban:man_with_turban,older_man:older_man,older_woman:older_woman,baby:baby,"female-construction-worker":"👷‍♀️","male-construction-worker":"👷‍♂️",construction_worker:construction_worker,princess:princess,japanese_ogre:japanese_ogre,japanese_goblin:japanese_goblin,ghost:ghost,angel:angel,alien:alien,space_invader:space_invader,imp:imp,skull:skull,"woman-tipping-hand":"💁‍♀️",information_desk_person:information_desk_person,"man-tipping-hand":"💁‍♂️","female-guard":"💂‍♀️","male-guard":"💂‍♂️",guardsman:guardsman,dancer:dancer,lipstick:lipstick,nail_care:nail_care,"woman-getting-massage":"💆‍♀️",massage:massage,"man-getting-massage":"💆‍♂️","woman-getting-haircut":"💇‍♀️",haircut:haircut,"man-getting-haircut":"💇‍♂️",barber:barber,syringe:syringe,pill:pill,kiss:kiss,love_letter:love_letter,ring:ring,gem:gem,couplekiss:couplekiss,bouquet:bouquet,couple_with_heart:couple_with_heart,wedding:wedding,heartbeat:heartbeat,broken_heart:broken_heart,two_hearts:two_hearts,sparkling_heart:sparkling_heart,heartpulse:heartpulse,cupid:cupid,blue_heart:blue_heart,green_heart:green_heart,yellow_heart:yellow_heart,purple_heart:purple_heart,gift_heart:gift_heart,revolving_hearts:revolving_hearts,heart_decoration:heart_decoration,diamond_shape_with_a_dot_inside:diamond_shape_with_a_dot_inside,bulb:bulb,anger:anger,bomb:bomb,zzz:zzz,boom:boom,collision:collision,sweat_drops:sweat_drops,droplet:droplet,dash:dash,hankey:hankey,poop:poop,shit:shit,muscle:muscle,dizzy:dizzy,speech_balloon:speech_balloon,thought_balloon:thought_balloon,white_flower:white_flower,moneybag:moneybag,currency_exchange:currency_exchange,heavy_dollar_sign:heavy_dollar_sign,credit_card:credit_card,yen:yen,dollar:dollar,euro:euro,pound:pound,money_with_wings:money_with_wings,chart:chart,seat:seat,computer:computer,briefcase:briefcase,minidisc:minidisc,floppy_disk:floppy_disk,cd:cd,dvd:dvd,file_folder:file_folder,open_file_folder:open_file_folder,page_with_curl:page_with_curl,page_facing_up:page_facing_up,date:date,calendar:calendar,card_index:card_index,chart_with_upwards_trend:chart_with_upwards_trend,chart_with_downwards_trend:chart_with_downwards_trend,bar_chart:bar_chart,clipboard:clipboard,pushpin:pushpin,round_pushpin:round_pushpin,paperclip:paperclip,straight_ruler:straight_ruler,triangular_ruler:triangular_ruler,bookmark_tabs:bookmark_tabs,ledger:ledger,notebook:notebook,notebook_with_decorative_cover:notebook_with_decorative_cover,closed_book:closed_book,book:book,open_book:open_book,green_book:green_book,blue_book:blue_book,orange_book:orange_book,books:books,name_badge:name_badge,scroll:scroll,memo:memo,pencil:pencil,telephone_receiver:telephone_receiver,pager:pager,fax:fax,satellite_antenna:satellite_antenna,loudspeaker:loudspeaker,mega:mega,outbox_tray:outbox_tray,inbox_tray:inbox_tray,"package":"📦","e-mail":"📧",incoming_envelope:incoming_envelope,envelope_with_arrow:envelope_with_arrow,mailbox_closed:mailbox_closed,mailbox:mailbox,mailbox_with_mail:mailbox_with_mail,mailbox_with_no_mail:mailbox_with_no_mail,postbox:postbox,postal_horn:postal_horn,newspaper:newspaper,iphone:iphone,calling:calling,vibration_mode:vibration_mode,mobile_phone_off:mobile_phone_off,no_mobile_phones:no_mobile_phones,signal_strength:signal_strength,camera:camera,camera_with_flash:camera_with_flash,video_camera:video_camera,tv:tv,radio:radio,vhs:vhs,film_projector:film_projector,prayer_beads:prayer_beads,twisted_rightwards_arrows:twisted_rightwards_arrows,repeat:repeat,repeat_one:repeat_one,arrows_clockwise:arrows_clockwise,arrows_counterclockwise:arrows_counterclockwise,low_brightness:low_brightness,high_brightness:high_brightness,mute:mute,speaker:speaker,sound:sound,loud_sound:loud_sound,battery:battery,electric_plug:electric_plug,mag:mag,mag_right:mag_right,lock_with_ink_pen:lock_with_ink_pen,closed_lock_with_key:closed_lock_with_key,key:key,lock:lock,unlock:unlock,bell:bell,no_bell:no_bell,bookmark:bookmark,link:link,radio_button:radio_button,back:back,end:end,on:on,soon:soon,top:top,underage:underage,keycap_ten:keycap_ten,capital_abcd:capital_abcd,abcd:abcd,symbols:symbols,abc:abc,fire:fire,flashlight:flashlight,wrench:wrench,hammer:hammer,nut_and_bolt:nut_and_bolt,hocho:hocho,knife:knife,gun:gun,microscope:microscope,telescope:telescope,crystal_ball:crystal_ball,six_pointed_star:six_pointed_star,beginner:beginner,trident:trident,black_square_button:black_square_button,white_square_button:white_square_button,red_circle:red_circle,large_blue_circle:large_blue_circle,large_orange_diamond:large_orange_diamond,large_blue_diamond:large_blue_diamond,small_orange_diamond:small_orange_diamond,small_blue_diamond:small_blue_diamond,small_red_triangle:small_red_triangle,small_red_triangle_down:small_red_triangle_down,arrow_up_small:arrow_up_small,arrow_down_small:arrow_down_small,om_symbol:om_symbol,dove_of_peace:dove_of_peace,kaaba:kaaba,mosque:mosque,synagogue:synagogue,menorah_with_nine_branches:menorah_with_nine_branches,clock1:clock1,clock2:clock2,clock3:clock3,clock4:clock4,clock5:clock5,clock6:clock6,clock7:clock7,clock8:clock8,clock9:clock9,clock10:clock10,clock11:clock11,clock12:clock12,clock130:clock130,clock230:clock230,clock330:clock330,clock430:clock430,clock530:clock530,clock630:clock630,clock730:clock730,clock830:clock830,clock930:clock930,clock1030:clock1030,clock1130:clock1130,clock1230:clock1230,candle:candle,mantelpiece_clock:mantelpiece_clock,hole:hole,man_in_business_suit_levitating:man_in_business_suit_levitating,"female-detective":"🕵️‍♀️","male-detective":"🕵️‍♂️",sleuth_or_spy:sleuth_or_spy,dark_sunglasses:dark_sunglasses,spider:spider,spider_web:spider_web,joystick:joystick,man_dancing:man_dancing,linked_paperclips:linked_paperclips,lower_left_ballpoint_pen:lower_left_ballpoint_pen,lower_left_fountain_pen:lower_left_fountain_pen,lower_left_paintbrush:lower_left_paintbrush,lower_left_crayon:lower_left_crayon,raised_hand_with_fingers_splayed:raised_hand_with_fingers_splayed,middle_finger:middle_finger,reversed_hand_with_middle_finger_extended:reversed_hand_with_middle_finger_extended,"spock-hand":"🖖",black_heart:black_heart,desktop_computer:desktop_computer,printer:printer,three_button_mouse:three_button_mouse,trackball:trackball,frame_with_picture:frame_with_picture,card_index_dividers:card_index_dividers,card_file_box:card_file_box,file_cabinet:file_cabinet,wastebasket:wastebasket,spiral_note_pad:spiral_note_pad,spiral_calendar_pad:spiral_calendar_pad,compression:compression,old_key:old_key,rolled_up_newspaper:rolled_up_newspaper,dagger_knife:dagger_knife,speaking_head_in_silhouette:speaking_head_in_silhouette,left_speech_bubble:left_speech_bubble,right_anger_bubble:right_anger_bubble,ballot_box_with_ballot:ballot_box_with_ballot,world_map:world_map,mount_fuji:mount_fuji,tokyo_tower:tokyo_tower,statue_of_liberty:statue_of_liberty,japan:japan,moyai:moyai,grinning:grinning,grin:grin,joy:joy,smiley:smiley,smile:smile,sweat_smile:sweat_smile,laughing:laughing,satisfied:satisfied,innocent:innocent,smiling_imp:smiling_imp,wink:wink,blush:blush,yum:yum,relieved:relieved,heart_eyes:heart_eyes,sunglasses:sunglasses,smirk:smirk,neutral_face:neutral_face,expressionless:expressionless,unamused:unamused,sweat:sweat,pensive:pensive,confused:confused,confounded:confounded,kissing:kissing,kissing_heart:kissing_heart,kissing_smiling_eyes:kissing_smiling_eyes,kissing_closed_eyes:kissing_closed_eyes,stuck_out_tongue:stuck_out_tongue,stuck_out_tongue_winking_eye:stuck_out_tongue_winking_eye,stuck_out_tongue_closed_eyes:stuck_out_tongue_closed_eyes,disappointed:disappointed,worried:worried,angry:angry,rage:rage,cry:cry,persevere:persevere,triumph:triumph,disappointed_relieved:disappointed_relieved,frowning:frowning,anguished:anguished,fearful:fearful,weary:weary,sleepy:sleepy,tired_face:tired_face,grimacing:grimacing,sob:sob,face_exhaling:face_exhaling,open_mouth:open_mouth,hushed:hushed,cold_sweat:cold_sweat,scream:scream,astonished:astonished,flushed:flushed,sleeping:sleeping,face_with_spiral_eyes:face_with_spiral_eyes,dizzy_face:dizzy_face,face_in_clouds:face_in_clouds,no_mouth:no_mouth,mask:mask,smile_cat:smile_cat,joy_cat:joy_cat,smiley_cat:smiley_cat,heart_eyes_cat:heart_eyes_cat,smirk_cat:smirk_cat,kissing_cat:kissing_cat,pouting_cat:pouting_cat,crying_cat_face:crying_cat_face,scream_cat:scream_cat,slightly_frowning_face:slightly_frowning_face,slightly_smiling_face:slightly_smiling_face,upside_down_face:upside_down_face,face_with_rolling_eyes:face_with_rolling_eyes,"woman-gesturing-no":"🙅‍♀️",no_good:no_good,"man-gesturing-no":"🙅‍♂️","woman-gesturing-ok":"🙆‍♀️",ok_woman:ok_woman,"man-gesturing-ok":"🙆‍♂️","woman-bowing":"🙇‍♀️","man-bowing":"🙇‍♂️",bow:bow,see_no_evil:see_no_evil,hear_no_evil:hear_no_evil,speak_no_evil:speak_no_evil,"woman-raising-hand":"🙋‍♀️",raising_hand:raising_hand,"man-raising-hand":"🙋‍♂️",raised_hands:raised_hands,"woman-frowning":"🙍‍♀️",person_frowning:person_frowning,"man-frowning":"🙍‍♂️","woman-pouting":"🙎‍♀️",person_with_pouting_face:person_with_pouting_face,"man-pouting":"🙎‍♂️",pray:pray,rocket:rocket,helicopter:helicopter,steam_locomotive:steam_locomotive,railway_car:railway_car,bullettrain_side:bullettrain_side,bullettrain_front:bullettrain_front,train2:train2,metro:metro,light_rail:light_rail,station:station,tram:tram,train:train,bus:bus,oncoming_bus:oncoming_bus,trolleybus:trolleybus,busstop:busstop,minibus:minibus,ambulance:ambulance,fire_engine:fire_engine,police_car:police_car,oncoming_police_car:oncoming_police_car,taxi:taxi,oncoming_taxi:oncoming_taxi,car:car,red_car:red_car,oncoming_automobile:oncoming_automobile,blue_car:blue_car,truck:truck,articulated_lorry:articulated_lorry,tractor:tractor,monorail:monorail,mountain_railway:mountain_railway,suspension_railway:suspension_railway,mountain_cableway:mountain_cableway,aerial_tramway:aerial_tramway,ship:ship,"woman-rowing-boat":"🚣‍♀️","man-rowing-boat":"🚣‍♂️",rowboat:rowboat,speedboat:speedboat,traffic_light:traffic_light,vertical_traffic_light:vertical_traffic_light,construction:construction,rotating_light:rotating_light,triangular_flag_on_post:triangular_flag_on_post,door:door,no_entry_sign:no_entry_sign,smoking:smoking,no_smoking:no_smoking,put_litter_in_its_place:put_litter_in_its_place,do_not_litter:do_not_litter,potable_water:potable_water,"non-potable_water":"🚱",bike:bike,no_bicycles:no_bicycles,"woman-biking":"🚴‍♀️","man-biking":"🚴‍♂️",bicyclist:bicyclist,"woman-mountain-biking":"🚵‍♀️","man-mountain-biking":"🚵‍♂️",mountain_bicyclist:mountain_bicyclist,"woman-walking":"🚶‍♀️","man-walking":"🚶‍♂️",walking:walking,no_pedestrians:no_pedestrians,children_crossing:children_crossing,mens:mens,womens:womens,restroom:restroom,baby_symbol:baby_symbol,toilet:toilet,wc:wc,shower:shower,bath:bath,bathtub:bathtub,passport_control:passport_control,customs:customs,baggage_claim:baggage_claim,left_luggage:left_luggage,couch_and_lamp:couch_and_lamp,sleeping_accommodation:sleeping_accommodation,shopping_bags:shopping_bags,bellhop_bell:bellhop_bell,bed:bed,place_of_worship:place_of_worship,octagonal_sign:octagonal_sign,shopping_trolley:shopping_trolley,hindu_temple:hindu_temple,hut:hut,elevator:elevator,hammer_and_wrench:hammer_and_wrench,shield:shield,oil_drum:oil_drum,motorway:motorway,railway_track:railway_track,motor_boat:motor_boat,small_airplane:small_airplane,airplane_departure:airplane_departure,airplane_arriving:airplane_arriving,satellite:satellite,passenger_ship:passenger_ship,scooter:scooter,motor_scooter:motor_scooter,canoe:canoe,sled:sled,flying_saucer:flying_saucer,skateboard:skateboard,auto_rickshaw:auto_rickshaw,pickup_truck:pickup_truck,roller_skate:roller_skate,large_orange_circle:large_orange_circle,large_yellow_circle:large_yellow_circle,large_green_circle:large_green_circle,large_purple_circle:large_purple_circle,large_brown_circle:large_brown_circle,large_red_square:large_red_square,large_blue_square:large_blue_square,large_orange_square:large_orange_square,large_yellow_square:large_yellow_square,large_green_square:large_green_square,large_purple_square:large_purple_square,large_brown_square:large_brown_square,pinched_fingers:pinched_fingers,white_heart:white_heart,brown_heart:brown_heart,pinching_hand:pinching_hand,zipper_mouth_face:zipper_mouth_face,money_mouth_face:money_mouth_face,face_with_thermometer:face_with_thermometer,nerd_face:nerd_face,thinking_face:thinking_face,face_with_head_bandage:face_with_head_bandage,robot_face:robot_face,hugging_face:hugging_face,the_horns:the_horns,sign_of_the_horns:sign_of_the_horns,call_me_hand:call_me_hand,raised_back_of_hand:raised_back_of_hand,"left-facing_fist":"🤛","right-facing_fist":"🤜",handshake:handshake,crossed_fingers:crossed_fingers,hand_with_index_and_middle_fingers_crossed:hand_with_index_and_middle_fingers_crossed,i_love_you_hand_sign:i_love_you_hand_sign,face_with_cowboy_hat:face_with_cowboy_hat,clown_face:clown_face,nauseated_face:nauseated_face,rolling_on_the_floor_laughing:rolling_on_the_floor_laughing,drooling_face:drooling_face,lying_face:lying_face,"woman-facepalming":"🤦‍♀️","man-facepalming":"🤦‍♂️",face_palm:face_palm,sneezing_face:sneezing_face,face_with_raised_eyebrow:face_with_raised_eyebrow,face_with_one_eyebrow_raised:face_with_one_eyebrow_raised,"star-struck":"🤩",grinning_face_with_star_eyes:grinning_face_with_star_eyes,zany_face:zany_face,grinning_face_with_one_large_and_one_small_eye:grinning_face_with_one_large_and_one_small_eye,shushing_face:shushing_face,face_with_finger_covering_closed_lips:face_with_finger_covering_closed_lips,face_with_symbols_on_mouth:face_with_symbols_on_mouth,serious_face_with_symbols_covering_mouth:serious_face_with_symbols_covering_mouth,face_with_hand_over_mouth:face_with_hand_over_mouth,smiling_face_with_smiling_eyes_and_hand_covering_mouth:smiling_face_with_smiling_eyes_and_hand_covering_mouth,face_vomiting:face_vomiting,face_with_open_mouth_vomiting:face_with_open_mouth_vomiting,exploding_head:exploding_head,shocked_face_with_exploding_head:shocked_face_with_exploding_head,pregnant_woman:pregnant_woman,"breast-feeding":"🤱",palms_up_together:palms_up_together,selfie:selfie,prince:prince,woman_in_tuxedo:woman_in_tuxedo,man_in_tuxedo:man_in_tuxedo,person_in_tuxedo:person_in_tuxedo,mrs_claus:mrs_claus,mother_christmas:mother_christmas,"woman-shrugging":"🤷‍♀️","man-shrugging":"🤷‍♂️",shrug:shrug,"woman-cartwheeling":"🤸‍♀️","man-cartwheeling":"🤸‍♂️",person_doing_cartwheel:person_doing_cartwheel,"woman-juggling":"🤹‍♀️","man-juggling":"🤹‍♂️",juggling:juggling,fencer:fencer,"woman-wrestling":"🤼‍♀️","man-wrestling":"🤼‍♂️",wrestlers:wrestlers,"woman-playing-water-polo":"🤽‍♀️","man-playing-water-polo":"🤽‍♂️",water_polo:water_polo,"woman-playing-handball":"🤾‍♀️","man-playing-handball":"🤾‍♂️",handball:handball,diving_mask:diving_mask,wilted_flower:wilted_flower,drum_with_drumsticks:drum_with_drumsticks,clinking_glasses:clinking_glasses,tumbler_glass:tumbler_glass,spoon:spoon,goal_net:goal_net,first_place_medal:first_place_medal,second_place_medal:second_place_medal,third_place_medal:third_place_medal,boxing_glove:boxing_glove,martial_arts_uniform:martial_arts_uniform,curling_stone:curling_stone,lacrosse:lacrosse,softball:softball,flying_disc:flying_disc,croissant:croissant,avocado:avocado,cucumber:cucumber,bacon:bacon,potato:potato,carrot:carrot,baguette_bread:baguette_bread,green_salad:green_salad,shallow_pan_of_food:shallow_pan_of_food,stuffed_flatbread:stuffed_flatbread,egg:egg,glass_of_milk:glass_of_milk,peanuts:peanuts,kiwifruit:kiwifruit,pancakes:pancakes,dumpling:dumpling,fortune_cookie:fortune_cookie,takeout_box:takeout_box,chopsticks:chopsticks,bowl_with_spoon:bowl_with_spoon,cup_with_straw:cup_with_straw,coconut:coconut,broccoli:broccoli,pie:pie,pretzel:pretzel,cut_of_meat:cut_of_meat,sandwich:sandwich,canned_food:canned_food,leafy_green:leafy_green,mango:mango,moon_cake:moon_cake,bagel:bagel,smiling_face_with_3_hearts:smiling_face_with_3_hearts,yawning_face:yawning_face,smiling_face_with_tear:smiling_face_with_tear,partying_face:partying_face,woozy_face:woozy_face,hot_face:hot_face,cold_face:cold_face,ninja:ninja,disguised_face:disguised_face,pleading_face:pleading_face,sari:sari,lab_coat:lab_coat,goggles:goggles,hiking_boot:hiking_boot,womans_flat_shoe:womans_flat_shoe,crab:crab,lion_face:lion_face,scorpion:scorpion,turkey:turkey,unicorn_face:unicorn_face,eagle:eagle,duck:duck,bat:bat,shark:shark,owl:owl,fox_face:fox_face,butterfly:butterfly,deer:deer,gorilla:gorilla,lizard:lizard,rhinoceros:rhinoceros,shrimp:shrimp,squid:squid,giraffe_face:giraffe_face,zebra_face:zebra_face,hedgehog:hedgehog,sauropod:sauropod,"t-rex":"🦖",cricket:cricket,kangaroo:kangaroo,llama:llama,peacock:peacock,hippopotamus:hippopotamus,parrot:parrot,raccoon:raccoon,lobster:lobster,mosquito:mosquito,microbe:microbe,badger:badger,swan:swan,mammoth:mammoth,dodo:dodo,sloth:sloth,otter:otter,orangutan:orangutan,skunk:skunk,flamingo:flamingo,oyster:oyster,beaver:beaver,bison:bison,seal:seal,guide_dog:guide_dog,probing_cane:probing_cane,bone:bone,leg:leg,foot:foot,tooth:tooth,female_superhero:female_superhero,male_superhero:male_superhero,superhero:superhero,female_supervillain:female_supervillain,male_supervillain:male_supervillain,supervillain:supervillain,safety_vest:safety_vest,ear_with_hearing_aid:ear_with_hearing_aid,motorized_wheelchair:motorized_wheelchair,manual_wheelchair:manual_wheelchair,mechanical_arm:mechanical_arm,mechanical_leg:mechanical_leg,cheese_wedge:cheese_wedge,cupcake:cupcake,salt:salt,beverage_box:beverage_box,garlic:garlic,onion:onion,falafel:falafel,waffle:waffle,butter:butter,mate_drink:mate_drink,ice_cube:ice_cube,bubble_tea:bubble_tea,woman_standing:woman_standing,man_standing:man_standing,standing_person:standing_person,woman_kneeling:woman_kneeling,man_kneeling:man_kneeling,kneeling_person:kneeling_person,deaf_woman:deaf_woman,deaf_man:deaf_man,deaf_person:deaf_person,face_with_monocle:face_with_monocle,farmer:farmer,cook:cook,person_feeding_baby:person_feeding_baby,mx_claus:mx_claus,student:student,singer:singer,artist:artist,teacher:teacher,factory_worker:factory_worker,technologist:technologist,office_worker:office_worker,mechanic:mechanic,scientist:scientist,astronaut:astronaut,firefighter:firefighter,people_holding_hands:people_holding_hands,person_with_probing_cane:person_with_probing_cane,red_haired_person:red_haired_person,curly_haired_person:curly_haired_person,bald_person:bald_person,white_haired_person:white_haired_person,person_in_motorized_wheelchair:person_in_motorized_wheelchair,person_in_manual_wheelchair:person_in_manual_wheelchair,health_worker:health_worker,judge:judge,pilot:pilot,adult:adult,child:child,older_adult:older_adult,woman_with_beard:woman_with_beard,man_with_beard:man_with_beard,bearded_person:bearded_person,person_with_headscarf:person_with_headscarf,woman_in_steamy_room:woman_in_steamy_room,man_in_steamy_room:man_in_steamy_room,person_in_steamy_room:person_in_steamy_room,woman_climbing:woman_climbing,person_climbing:person_climbing,man_climbing:man_climbing,woman_in_lotus_position:woman_in_lotus_position,person_in_lotus_position:person_in_lotus_position,man_in_lotus_position:man_in_lotus_position,female_mage:female_mage,mage:mage,male_mage:male_mage,female_fairy:female_fairy,fairy:fairy,male_fairy:male_fairy,female_vampire:female_vampire,vampire:vampire,male_vampire:male_vampire,mermaid:mermaid,merman:merman,merperson:merperson,female_elf:female_elf,male_elf:male_elf,elf:elf,female_genie:female_genie,male_genie:male_genie,genie:genie,female_zombie:female_zombie,male_zombie:male_zombie,zombie:zombie,brain:brain,orange_heart:orange_heart,billed_cap:billed_cap,scarf:scarf,gloves:gloves,coat:coat,socks:socks,red_envelope:red_envelope,firecracker:firecracker,jigsaw:jigsaw,test_tube:test_tube,petri_dish:petri_dish,dna:dna,compass:compass,abacus:abacus,fire_extinguisher:fire_extinguisher,toolbox:toolbox,bricks:bricks,magnet:magnet,luggage:luggage,lotion_bottle:lotion_bottle,thread:thread,yarn:yarn,safety_pin:safety_pin,teddy_bear:teddy_bear,broom:broom,basket:basket,roll_of_paper:roll_of_paper,soap:soap,sponge:sponge,receipt:receipt,nazar_amulet:nazar_amulet,ballet_shoes:ballet_shoes,"one-piece_swimsuit":"🩱",briefs:briefs,shorts:shorts,thong_sandal:thong_sandal,drop_of_blood:drop_of_blood,adhesive_bandage:adhesive_bandage,stethoscope:stethoscope,"yo-yo":"🪀",kite:kite,parachute:parachute,boomerang:boomerang,magic_wand:magic_wand,pinata:pinata,nesting_dolls:nesting_dolls,ringed_planet:ringed_planet,chair:chair,razor:razor,axe:axe,diya_lamp:diya_lamp,banjo:banjo,military_helmet:military_helmet,accordion:accordion,long_drum:long_drum,coin:coin,carpentry_saw:carpentry_saw,screwdriver:screwdriver,ladder:ladder,hook:hook,mirror:mirror,globalThis:globalThis,plunger:plunger,sewing_needle:sewing_needle,knot:knot,bucket:bucket,mouse_trap:mouse_trap,toothbrush:toothbrush,headstone:headstone,placard:placard,rock:rock,fly:fly,worm:worm,beetle:beetle,cockroach:cockroach,potted_plant:potted_plant,wood:wood,feather:feather,anatomical_heart:anatomical_heart,lungs:lungs,people_hugging:people_hugging,blueberries:blueberries,bell_pepper:bell_pepper,olive:olive,flatbread:flatbread,tamale:tamale,fondue:fondue,teapot:teapot,bangbang:bangbang,interrobang:interrobang,tm:tm,information_source:information_source,left_right_arrow:left_right_arrow,arrow_up_down:arrow_up_down,arrow_upper_left:arrow_upper_left,arrow_upper_right:arrow_upper_right,arrow_lower_right:arrow_lower_right,arrow_lower_left:arrow_lower_left,leftwards_arrow_with_hook:leftwards_arrow_with_hook,arrow_right_hook:arrow_right_hook,watch:watch,hourglass:hourglass,keyboard:keyboard,eject:eject,fast_forward:fast_forward,rewind:rewind,arrow_double_up:arrow_double_up,arrow_double_down:arrow_double_down,black_right_pointing_double_triangle_with_vertical_bar:black_right_pointing_double_triangle_with_vertical_bar,black_left_pointing_double_triangle_with_vertical_bar:black_left_pointing_double_triangle_with_vertical_bar,black_right_pointing_triangle_with_double_vertical_bar:black_right_pointing_triangle_with_double_vertical_bar,alarm_clock:alarm_clock,stopwatch:stopwatch,timer_clock:timer_clock,hourglass_flowing_sand:hourglass_flowing_sand,double_vertical_bar:double_vertical_bar,black_square_for_stop:black_square_for_stop,black_circle_for_record:black_circle_for_record,m:m,black_small_square:black_small_square,white_small_square:white_small_square,arrow_forward:arrow_forward,arrow_backward:arrow_backward,white_medium_square:white_medium_square,black_medium_square:black_medium_square,white_medium_small_square:white_medium_small_square,black_medium_small_square:black_medium_small_square,sunny:sunny,cloud:cloud,umbrella:umbrella,snowman:snowman,comet:comet,phone:phone,telephone:telephone,ballot_box_with_check:ballot_box_with_check,shamrock:shamrock,point_up:point_up,skull_and_crossbones:skull_and_crossbones,radioactive_sign:radioactive_sign,biohazard_sign:biohazard_sign,orthodox_cross:orthodox_cross,star_and_crescent:star_and_crescent,peace_symbol:peace_symbol,yin_yang:yin_yang,wheel_of_dharma:wheel_of_dharma,white_frowning_face:white_frowning_face,relaxed:relaxed,female_sign:female_sign,male_sign:male_sign,gemini:gemini,cancer:cancer,leo:leo,virgo:virgo,libra:libra,scorpius:scorpius,chess_pawn:chess_pawn,spades:spades,clubs:clubs,hearts:hearts,diamonds:diamonds,hotsprings:hotsprings,recycle:recycle,infinity:infinity,wheelchair:wheelchair,hammer_and_pick:hammer_and_pick,crossed_swords:crossed_swords,medical_symbol:medical_symbol,staff_of_aesculapius:staff_of_aesculapius,scales:scales,alembic:alembic,gear:gear,atom_symbol:atom_symbol,fleur_de_lis:fleur_de_lis,warning:warning,zap:zap,transgender_symbol:transgender_symbol,white_circle:white_circle,black_circle:black_circle,coffin:coffin,funeral_urn:funeral_urn,soccer:soccer,baseball:baseball,snowman_without_snow:snowman_without_snow,partly_sunny:partly_sunny,thunder_cloud_and_rain:thunder_cloud_and_rain,ophiuchus:ophiuchus,pick:pick,helmet_with_white_cross:helmet_with_white_cross,chains:chains,no_entry:no_entry,shinto_shrine:shinto_shrine,church:church,mountain:mountain,umbrella_on_ground:umbrella_on_ground,fountain:fountain,golf:golf,ferry:ferry,boat:boat,sailboat:sailboat,skier:skier,ice_skate:ice_skate,"woman-bouncing-ball":"⛹️‍♀️","man-bouncing-ball":"⛹️‍♂️",person_with_ball:person_with_ball,tent:tent,fuelpump:fuelpump,scissors:scissors,airplane:airplane,email:email,envelope:envelope,fist:fist,hand:hand,raised_hand:raised_hand,v:v,writing_hand:writing_hand,pencil2:pencil2,black_nib:black_nib,heavy_check_mark:heavy_check_mark,heavy_multiplication_x:heavy_multiplication_x,latin_cross:latin_cross,star_of_david:star_of_david,eight_spoked_asterisk:eight_spoked_asterisk,eight_pointed_black_star:eight_pointed_black_star,snowflake:snowflake,sparkle:sparkle,x:x,negative_squared_cross_mark:negative_squared_cross_mark,heavy_heart_exclamation_mark_ornament:heavy_heart_exclamation_mark_ornament,heart_on_fire:heart_on_fire,mending_heart:mending_heart,heart:heart,arrow_right:arrow_right,curly_loop:curly_loop,loop:loop,arrow_heading_up:arrow_heading_up,arrow_heading_down:arrow_heading_down,arrow_left:arrow_left,arrow_up:arrow_up,arrow_down:arrow_down,black_large_square:black_large_square,white_large_square:white_large_square,star:star,o:o,wavy_dash:wavy_dash,part_alternation_mark:part_alternation_mark,congratulations:congratulations,secret:secret};

/*jslint node: true*/

var toArray = toArray_1;
var emojiByName = require$$1;

/**
 * regex to parse emoji in a string - finds emoji, e.g. :coffee:
 */
var emojiNameRegex = /:([a-zA-Z0-9_\-\+]+):/g;

/**
 * regex to trim whitespace
 * use instead of String.prototype.trim() for IE8 support
 */
var trimSpaceRegex = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

/**
 * Removes colons on either side
 * of the string if present
 * @param  {string} str
 * @return {string}
 */
function stripColons (str) {
  var colonIndex = str.indexOf(':');
  if (colonIndex > -1) {
    // :emoji: (http://www.emoji-cheat-sheet.com/)
    if (colonIndex === str.length - 1) {
      str = str.substring(0, colonIndex);
      return stripColons(str);
    } else {
      str = str.substr(colonIndex + 1);
      return stripColons(str);
    }
  }

  return str;
}

/**
 * Adds colons to either side
 * of the string
 * @param {string} str
 * @return {string}
 */
function wrapColons (str) {
  return (typeof str === 'string' && str.length > 0) ? ':' + str + ':' : str;
}

/**
 * Ensure that the word is wrapped in colons
 * by only adding them, if they are not there.
 * @param {string} str
 * @return {string}
 */
function ensureColons (str) {
  return (typeof str === 'string' && str[0] !== ':') ? wrapColons(str) : str;
}

// Non spacing mark, some emoticons have them. It's the 'Variant Form',
// which provides more information so that emoticons can be rendered as
// more colorful graphics. FE0E is a unicode text version, where as FE0F
// should be rendered as a graphical version. The code gracefully degrades.
var NON_SPACING_MARK = String.fromCharCode(65039); // 65039 - '️' - 0xFE0F;
var nonSpacingRegex = new RegExp(NON_SPACING_MARK, 'g');

// Remove the non-spacing-mark from the code, never send a stripped version
// to the client, as it kills graphical emoticons.
function stripNSB (code) {
  return code.replace(nonSpacingRegex, '');
}
// Reversed hash table, where as emojiByName contains a { heart: '❤' }
// dictionary emojiByCode contains { ❤: 'heart' }. The codes are normalized
// to the text version.
var emojiByCode = Object.keys(emojiByName).reduce(function(h,k) {
  h[stripNSB(emojiByName[k])] = k;
  return h;
}, {});

/**
 * Emoji namespace
 */
var Emoji$1 = {
  emoji: emojiByName,
};

/**
 * get emoji code from name. return emoji code back if code is passed in.
 * @param  {string} emoji
 * @return {string}
 */
Emoji$1._get = function _get (emoji) {
  if (emojiByCode[stripNSB(emoji)]) {
    return emoji;
  } else if (emojiByName.hasOwnProperty(emoji)) {
    return emojiByName[emoji];
  }

  return ensureColons(emoji);
};

/**
 * get emoji code from :emoji: string or name
 * @param  {string} emoji
 * @return {string}
 */
Emoji$1.get = function get (emoji) {
  emoji = stripColons(emoji);

  return Emoji$1._get(emoji);
};

/**
 * find the emoji by either code or name
 * @param {string} nameOrCode The emoji to find, either `coffee`, `:coffee:` or `☕`;
 * @return {object}
 */
Emoji$1.find = function find (nameOrCode) {
  return Emoji$1.findByName(nameOrCode) || Emoji$1.findByCode(nameOrCode);
};

/**
 * find the emoji by name
 * @param {string} name The emoji to find either `coffee` or `:coffee:`;
 * @return {object}
 */
Emoji$1.findByName = function findByName (name) {
  var stripped = stripColons(name);
  var emoji = emojiByName[stripped];

  return emoji ? ({ emoji: emoji, key: stripped }) : undefined;
};

/**
 * find the emoji by code (emoji)
 * @param {string} code The emoji to find; for example `☕` or `☔`
 * @return {object}
 */
Emoji$1.findByCode = function findByCode (code) {
  var stripped = stripNSB(code);
  var name = emojiByCode[stripped];

  // lookup emoji to ensure the Variant Form is returned
  return name ? ({ emoji: emojiByName[name], key: name }) : undefined;
};


/**
 * Check if an emoji is known by this library
 * @param {string} nameOrCode The emoji to validate, either `coffee`, `:coffee:` or `☕`;
 * @return {object}
 */
Emoji$1.hasEmoji = function hasEmoji (nameOrCode) {
  return Emoji$1.hasEmojiByName(nameOrCode) || Emoji$1.hasEmojiByCode(nameOrCode);
};

/**
 * Check if an emoji with given name is known by this library
 * @param {string} name The emoji to validate either `coffee` or `:coffee:`;
 * @return {object}
 */
Emoji$1.hasEmojiByName = function hasEmojiByName (name) {
  var result = Emoji$1.findByName(name);
  return !!result && result.key === stripColons(name);
};

/**
 * Check if a given emoji is known by this library
 * @param {string} code The emoji to validate; for example `☕` or `☔`
 * @return {object}
 */
Emoji$1.hasEmojiByCode = function hasEmojiByCode (code) {
  var result = Emoji$1.findByCode(code);
  return !!result && stripNSB(result.emoji) === stripNSB(code);
};

/**
 * get emoji name from code
 * @param  {string} emoji
 * @param  {boolean} includeColons should the result include the ::
 * @return {string}
 */
Emoji$1.which = function which (emoji_code, includeColons) {
  var code = stripNSB(emoji_code);
  var word = emojiByCode[code];

  return includeColons ? wrapColons(word) : word;
};

/**
 * emojify a string (replace :emoji: with an emoji)
 * @param  {string} str
 * @param  {function} on_missing (gets emoji name without :: and returns a proper emoji if no emoji was found)
 * @param  {function} format (wrap the returned emoji in a custom element)
 * @return {string}
 */
Emoji$1.emojify = function emojify (str, on_missing, format) {
  if (!str) return '';

  return str.split(emojiNameRegex) // parse emoji via regex
            .map(function parseEmoji(s, i) {
              // every second element is an emoji, e.g. "test :fast_forward:" -> [ "test ", "fast_forward" ]
              if (i % 2 === 0) return s;
              var emoji = Emoji$1._get(s);
              var isMissing = emoji.indexOf(':') > -1;

              if (isMissing && typeof on_missing === 'function') {
                return on_missing(s);
              }

              if (!isMissing && typeof format === 'function') {
                return format(emoji, s);
              }

              return emoji;
            })
            .join('') // convert back to string
  ;
};

/**
 * return a random emoji
 * @return {string}
 */
Emoji$1.random = function random () {
  var emojiKeys = Object.keys(emojiByName);
  var randomIndex = Math.floor(Math.random() * emojiKeys.length);
  var key = emojiKeys[randomIndex];
  var emoji = Emoji$1._get(key);
  return { key: key, emoji: emoji };
};

/**
 *  return an collection of potential emoji matches
 *  @param {string} str
 *  @return {Array.<Object>}
 */
Emoji$1.search = function search (str) {
  var emojiKeys = Object.keys(emojiByName);
  var matcher = stripColons(str);
  var matchingKeys = emojiKeys.filter(function(key) {
    return key.toString().indexOf(matcher) === 0;
  });
  return matchingKeys.map(function(key) {
    return {
      key: key,
      emoji: Emoji$1._get(key),
    };
  });
};

/**
 * unemojify a string (replace emoji with :emoji:)
 * @param  {string} str
 * @return {string}
 */
Emoji$1.unemojify = function unemojify (str) {
  if (!str) return '';
  var words = toArray(str);

  return words.map(function(word) {
    return Emoji$1.which(word, true) || word;
  }).join('');
};

/**
 * replace emojis with replacement value
 * @param {string} str
 * @param {function|string} the string or callback function to replace the emoji with
 * @param {boolean} should trailing whitespaces be cleaned? Defaults false
 * @return {string}
 */
Emoji$1.replace = function replace (str, replacement, cleanSpaces) {
  if (!str) return '';

  var replace = typeof replacement === 'function' ? replacement : function() { return replacement; };
  var words = toArray(str);

  var replaced = words.map(function(word, idx) {
    var emoji = Emoji$1.findByCode(word);

    if (emoji && cleanSpaces && words[idx + 1] === ' ') {
      words[idx + 1] = '';
    }

    return emoji ? replace(emoji) : word;
  }).join('');

  return cleanSpaces ? replaced.replace(trimSpaceRegex, '') : replaced;
};


/**
 * remove all emojis from a string
 * @param {string} str
 * @return {string}
 */
Emoji$1.strip = function strip (str) {
  return Emoji$1.replace(str, '', true);
};

var emoji$1 = Emoji$1;

var nodeEmoji = emoji$1;

var nodeEmoji$1 = /*@__PURE__*/getDefaultExportFromCjs(nodeEmoji);

/* ..\..\1-builds\02-upstream-master\packages\plugin-emoji\dist\Emoji.svelte generated by Svelte v4.2.18 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[15] = list[i];
	child_ctx[16] = list;
	child_ctx[17] = i;
	return child_ctx;
}

// (95:10) {#if visible && filter.length > 0 && emojis.length > 0}
function create_if_block(ctx) {
	let div;
	let div_intro;
	let div_outro;
	let current;
	let mounted;
	let dispose;
	let each_value = ensure_array_like(/*emojis*/ ctx[7]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			set_style(div, "--cols", cols);
			attr(div, "class", "carta-emoji svelte-18o0zp1");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div, null);
				}
			}

			current = true;

			if (!mounted) {
				dispose = action_destroyer(/*carta*/ ctx[0].bindToCaret(div));
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*hoveringIndex, emojis, emojisElements, selectEmoji*/ 408) {
				each_value = ensure_array_like(/*emojis*/ ctx[7]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i(local) {
			if (current) return;

			if (local) {
				add_render_callback(() => {
					if (!current) return;
					if (div_outro) div_outro.end(1);
					div_intro = create_in_transition(div, /*inTransition*/ ctx[1], {});
					div_intro.start();
				});
			}

			current = true;
		},
		o(local) {
			if (div_intro) div_intro.invalidate();

			if (local) {
				div_outro = create_out_transition(div, /*outTransition*/ ctx[2], {});
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(div);
			}

			destroy_each(each_blocks, detaching);
			if (detaching && div_outro) div_outro.end();
			mounted = false;
			dispose();
		}
	};
}

// (101:2) {#each emojis as emoji, i}
function create_each_block(ctx) {
	let button;
	let t_value = /*emoji*/ ctx[15].emoji + "";
	let t;
	let button_class_value;
	let button_title_value;
	let i = /*i*/ ctx[17];
	let mounted;
	let dispose;

	function click_handler() {
		return /*click_handler*/ ctx[9](/*emoji*/ ctx[15]);
	}

	const assign_button = () => /*button_binding*/ ctx[10](button, i);
	const unassign_button = () => /*button_binding*/ ctx[10](null, i);

	return {
		c() {
			button = element("button");
			t = text(t_value);

			attr(button, "class", button_class_value = /*i*/ ctx[17] === /*hoveringIndex*/ ctx[3]
			? 'carta-active'
			: '');

			attr(button, "title", button_title_value = /*emoji*/ ctx[15].key);
		},
		m(target, anchor) {
			insert(target, button, anchor);
			append(button, t);
			assign_button();

			if (!mounted) {
				dispose = listen(button, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*emojis*/ 128 && t_value !== (t_value = /*emoji*/ ctx[15].emoji + "")) set_data(t, t_value);

			if (dirty & /*hoveringIndex*/ 8 && button_class_value !== (button_class_value = /*i*/ ctx[17] === /*hoveringIndex*/ ctx[3]
			? 'carta-active'
			: '')) {
				attr(button, "class", button_class_value);
			}

			if (dirty & /*emojis*/ 128 && button_title_value !== (button_title_value = /*emoji*/ ctx[15].key)) {
				attr(button, "title", button_title_value);
			}

			if (i !== /*i*/ ctx[17]) {
				unassign_button();
				i = /*i*/ ctx[17];
				assign_button();
			}
		},
		d(detaching) {
			if (detaching) {
				detach(button);
			}

			unassign_button();
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let if_block = /*visible*/ ctx[5] && /*filter*/ ctx[6].length > 0 && /*emojis*/ ctx[7].length > 0 && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty$1();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (/*visible*/ ctx[5] && /*filter*/ ctx[6].length > 0 && /*emojis*/ ctx[7].length > 0) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*visible, filter, emojis*/ 224) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			transition_in(if_block);
		},
		o(local) {
			transition_out(if_block);
		},
		d(detaching) {
			if (detaching) {
				detach(if_block_anchor);
			}

			if (if_block) if_block.d(detaching);
		}
	};
}

const cols = 8;
const maxRows = 12;

function instance($$self, $$props, $$invalidate) {
	let { carta } = $$props;
	let { inTransition } = $$props;
	let { outTransition } = $$props;
	let visible = false;
	let filter = "";
	let colonPosition = 0;
	let hoveringIndex = 0;
	let emojis = [];
	let emojisElements = Array(cols * maxRows);

	onMount(() => {
		carta.input?.textarea.addEventListener("keydown", handleKeyDown);
		carta.input?.textarea.addEventListener("keyup", handleKeyUp);
		carta.input?.textarea.addEventListener("click", hide);
		carta.input?.textarea.addEventListener("blur", hide);
	});

	onDestroy(() => {
		carta.input?.textarea.removeEventListener("keydown", handleKeyDown);
		carta.input?.textarea.removeEventListener("keyup", handleKeyUp);
		carta.input?.textarea.removeEventListener("click", hide);
		carta.input?.textarea.removeEventListener("blur", hide);
	});

	function hide() {
		$$invalidate(5, visible = false);
	}

	function handleKeyDown(e) {
		if (!carta.input) return;

		if (visible) {
			if (e.key === " " || e.key === "Escape" || e.key === "Backspace" && filter === "") {
				$$invalidate(5, visible = false);
			} else if (e.key === "Enter") {
				if (filter.length > 0) {
					const emoji = emojis.at(hoveringIndex);

					if (emoji) {
						e.preventDefault();
						selectEmoji(emoji);
					}
				}

				$$invalidate(5, visible = false);
			} else {
				if (e.key === "ArrowUp") {
					e.preventDefault();
					$$invalidate(3, hoveringIndex = (emojis.length + hoveringIndex - Math.min(cols, emojis.length)) % emojis.length);
				} else if (e.key === "ArrowDown") {
					e.preventDefault();
					$$invalidate(3, hoveringIndex = (emojis.length + hoveringIndex + Math.min(cols, emojis.length)) % emojis.length);
				} else if (e.key === "ArrowLeft") {
					e.preventDefault();
					$$invalidate(3, hoveringIndex = (emojis.length + hoveringIndex - 1) % emojis.length);
				} else if (e.key === "ArrowRight") {
					e.preventDefault();
					$$invalidate(3, hoveringIndex = (emojis.length + hoveringIndex + 1) % emojis.length);
				}
			}
		} else if (e.key === ":") {
			$$invalidate(5, visible = true);
			colonPosition = carta.input.textarea.selectionStart;
			$$invalidate(6, filter = "");
		}
	}

	function handleKeyUp(e) {
		if (!carta.input) return;
		if (!visible) return;

		if (carta.input.textarea.selectionStart < colonPosition) {
			$$invalidate(5, visible = false);
		} else if (e.key.length === 1 || e.key === "Backspace") {
			$$invalidate(6, filter = carta.input.textarea.value.slice(colonPosition + 1, carta.input.textarea.selectionStart));
			$$invalidate(7, emojis = nodeEmoji$1.search(filter).slice(0, cols * maxRows));
			$$invalidate(3, hoveringIndex = 0);
		}
	}

	function selectEmoji(emoji) {
		if (!carta.input) return;
		carta.input.removeAt(colonPosition, filter.length + 1);
		carta.input.insertAt(colonPosition, ":" + emoji.key + ":");
		const newPosition = colonPosition + 2 + emoji.key.length;
		carta.input.textarea.setSelectionRange(newPosition, newPosition);
		carta.input.update();
	}

	const click_handler = emoji => selectEmoji(emoji);

	function button_binding($$value, i) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			emojisElements[i] = $$value;
			$$invalidate(4, emojisElements);
		});
	}

	$$self.$$set = $$props => {
		if ('carta' in $$props) $$invalidate(0, carta = $$props.carta);
		if ('inTransition' in $$props) $$invalidate(1, inTransition = $$props.inTransition);
		if ('outTransition' in $$props) $$invalidate(2, outTransition = $$props.outTransition);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*emojisElements, hoveringIndex*/ 24) {
			{
				const hovering = emojisElements.at(hoveringIndex);

				if (hovering) {
					const snipElem = emojisElements[hoveringIndex];
					snipElem?.scrollIntoView({ behavior: "smooth", block: "nearest" });
				}
			}
		}
	};

	return [
		carta,
		inTransition,
		outTransition,
		hoveringIndex,
		emojisElements,
		visible,
		filter,
		emojis,
		selectEmoji,
		click_handler,
		button_binding
	];
}

class Emoji extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, not_equal, {
			carta: 0,
			inTransition: 1,
			outTransition: 2
		});
	}
}

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

var src = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};

var BezierEasing = /*@__PURE__*/getDefaultExportFromCjs(src);

//export * from './default.css?inline';
/**
 * Carta emoji plugin. Adds support to render emojis as well as an emojis snippet.
 */
const emoji = (options) => {
    const inTransition = options?.inTransition ??
        ((node) => scale(node, {
            duration: 150,
            easing: BezierEasing(0.05, 0.68, 0.2, 1.15)
        }));
    const outTransition = options?.inTransition ??
        ((node) => fade(node, {
            duration: 100
        }));
    const emojiComponent = {
        component: Emoji,
        parent: 'input',
        props: {
            inTransition,
            outTransition
        }
    };
    const grammar = {
        name: 'emoji',
        type: 'inline',
        definition: {
            match: ':[a-zA-Z_]+:',
            name: 'markup.emoji.markdown'
        }
    };
    const highlighting = {
        light: {
            scope: 'markup.emoji',
            settings: {
                foreground: '#3bf'
            }
        },
        dark: {
            scope: 'markup.emoji',
            settings: {
                foreground: '#4dacfa'
            }
        }
    };
    return {
        transformers: [
            {
                execution: 'sync',
                type: 'remark',
                transform({ processor }) {
                    processor.use(remarkGemoji);
                }
            }
        ],
        components: [emojiComponent],
        grammarRules: [grammar],
        highlightingRules: [highlighting]
    };
};

export { emoji as default };
