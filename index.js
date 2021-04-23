// Original Code

function itemer(code) {
  var c1 = code.substring(0, 6);
  var c2 = code.substring(6, 12);
  var c3 = code.substring(12, 18);
  var c4 = code.substring(18, 24);
  var id = code.substring(25, 31);

  $('.c1').css('background-color', '#' + c1).find('span').text('#' + c1).attr('onclick', 'copy("#' + c1 + '", this)');
  $('.c2').css('background-color', '#' + c2).find('span').text('#' + c2).attr('onclick', 'copy("#' + c2 + '", this)');
  $('.c3').css('background-color', '#' + c3).find('span').text('#' + c3).attr('onclick', 'copy("#' + c3 + '", this)');
  $('.c4').css('background-color', '#' + c4).find('span').text('#' + c4).attr('onclick', 'copy("#' + c4 + '", this)');
  $('a#logo').attr('href', 'https://colorhunt.co/palette/' + id + '?ref=tab');

  return [c1, c2, c3, c4];
}

function copy(text, target) {
  setTimeout(function() {
    $('#copied_tip').remove();
  }, 1000);

  $('body').append("<div class='tip' id='copied_tip'>Copied!</div>");

  var input = document.createElement('input');
  input.setAttribute('value', text);

  document.body.appendChild(input);
  input.select();

  var result = document.execCommand('copy');
  document.body.removeChild(input)
  return result;
}

var data = [
  '353e55b36458bcd3c2e0e7b8-30296', '92e6e6fff9afd65d7a524c84-119215', '295e621c4648d5d46fdff09d-39932', 'f1f4c6d6d0b8aaa6a4837d7d-162', '8aacff6151bbd7f09667ba6d-3943', 'b31313ff9000fdda16ffee82-44906', 'fbd68563aebb7a5d7e312b30-122132',
  '70560dc3a655efd99bf8edcd-1319', 'f5feffbde4f4404969dc552c-88012', 'f1fafba0e4f17ea6f44a4de7-10468', 'f7fa8676e7c79e7eff9c4b9e-3530', 'f23557f0d43a22b2da3b4a6b-65175', 'e0c97efcf8b3fb9378ab6088-29979', '3a3a62604fdd26c6d0e6e993-44992',
  '3b09445f1854a12559f1bbd5-95352', 'edf0c74e95252e5a1cff5c00-123723', 'cb9b42b1d1c5f2f3eedbd7cb-130295', '561f55df3554902424541f1f-823', 'eff0f4d3d6db415f9d233b6e-62241', '8cdadb815e94f4f49ef1d089-234', '0c005abc2525ff0000eaeaea-137537',
  'f7aa0023578440a8c4bcdbdf-125270', 'dfe2feb1cbfa8e98f57874f2-129370', '324e7b86a6df5068a9f8f8f8-79894', 'fef9d9ce7d0093590000541a-124945', 'f1ed63d97d979862ae815a8f-43846', '511e788b2f97cf56a1fcb2bf-65474', '620808a53f3ff4ce74ffe9c1-4337',
  'feffcbffb576ff6b83c6394d-11343', 'ffe6ebffcdcd6a65d81d2786-112238', 'f9ebc4a7cf5da97555483d3c-18933', '432160ff7a5a50e3c2fcf4d9-92339', '2729321c7293b9e3c6f1f2eb-43560', 'b2e672fffd88ffd478f96b85-17826', 'd2f079c8d35bad8c45a2663e-2130',
  '424153fdadc7ea4c88993399-121460', 'fdea2ef40968512e5e20194a-28270', 'a8e0e15a96bb75448cc46caa-3168', 'fff6da84f2d6fc6b3f262525-124691', 'fefea4fed96bfc92e3ee7cff-19373', 'fdfbdad3d0a8819f7f2d4659-3177', '860f44bb3939ea5f2deec89f-121899',
  '612147509aaf7dd8c7f5ffc3-131949', 'f8b595f67280c06c846c5b7c-117448', 'ffca61ffec85f2ffdfc9f0d6-41890', 'f8ed86a5e9db2ca4bf415b90-84458', '78fee04bc2c53b9a9cfef4a9-116408', 'd19febfffd9df7d08ced8282-230', '111f4df2f4f7e43a19020205-106735',
  'fffcca55e9bc11d3bc537780-17140', 'fbf0f0dfd3d3b8b0b07c7575-110659', '222831393e4600adb5eeeeee-2763', 'a8026fdb2d43e76838fbd5af-134309', '3c1b1fb21e4be2bf81f6e1b5-78675', 'f2f4fbff9280ff240045315d-131266', 'ccf0c3bca3ca7c47894a0e5c-130498',
  '5d414d7e858babd4c1e5f6c6-12508', '2a363bcf4647f5d061f8f6f6-73684', 'f56a47b32c50681a1e0a0944-112989', 'de5b7beccfd1f0e3c498ded3-124494', 'ff5959ffad5a4f9da61a0841-126188', 'ff8a69f06161bb42727a3476-5243', '6ea7c16b55aee67fa2ffefa1-7640',
  'd1dbbd91aa9d3e606f193441-3267', 'fae3e3b7b7b71370833d0240-110878', '005689007cb9f6c667f1f8fd-36668', 'e0fcff90f2ff6eb6ff7098da-62610', 'c6de412d6e7e153b44071c21-104108', 'c4317bac7c7cd0baa8efe4e4-34104', 'f3cba5975a5e45395325161b-6186',
  'eff2ddfcda05ee48485c3551-14490', 'f1ffd98bdbf5b292eaeb55bf-38863', 'f6eb9a5853bc3623911c0c59-65088', 'e6dedd8f1d141b120ff89d13-136873', 'f5f4e8c50d66f07810eec60a-124795', '403121a65e09ed9728faf494-14886', '3a0088930077e61c5dffe98a-137195',
  'f8f9fcc00000de3c3cf7b32d-112572', 'f4f4ec76e2f4615dec301781-70782', 'ffdd83e3f8ff31bccc405983-44995', '90aeffcefc8660efb8f9f7f7-119891', '776ae388e570fbff67ffb44a-3667', '80ffdb55e0a35b70f34850b9-3059', 'f1e290f677c19b3284690074-85014',
  '2f1b419f1e49fecd51f2f2f2-72200', '006c9a00bebe00f3e49ff9c1-44798', 'f8fdc3facbf8efa7f3f677f7-70746', 'ea5959f98b60ffc057ffe084-26363', 'e4eddb307672144d531a3c40-116909', 'f6f5f5e3e3e33bb4c1048998-65929', '22c7a92db6a3fccf4dfef3cc-72664',
  'dd4747ed6d54ffbe5bffe559-9544', 'c9182bf23a3ae3f3ac44c662-38497', '13334c005792f6f6e9fd5f00-124611', '3d5a599aebdd367db5313e86-3590', '007ab5005a85004262d8e6ec-36181', '17e7a4f6f1f1e0d9097d7474-28937', '39627f4b788fe4de66beb000-37211',
  'f12b6bff467efd94b4f6c7c7-109517', 'db2d4387e5dac7f2e3f7aa00-133655', 'fb929effdfdffff6f6aedefc-127205', 'a561fffd72adfcce9ecfe3ff-10953', 'e35454f6fa7bd2d868ac9742-2640', 'f6490d0002491dced8faf9f0-104487', '2e99b0fcd77fff2e4c1e1548-124219',
  'ed9153fbd157fbede153435b-42563', 'ff007bff5757ff8585ffebeb-91891', '7b3c3cdb5f29f0f0e468bde1-125434', '283149404b69f73859dbedf3-114174', '2b2e4ae8454590374953354a-238', '4a237761529fba69def3e96d-2779', '480032df0054ff8b6affd2bb-120066',
  '7a4579d56073ec9e69ffff8f-124355', '492b7b301551ed8a0af7d914-2485', '990000ff6600c1d343f7f7cf-9585', '062925044a423a9188b8e1dd-4910', 'd8dfe271adb5176d810d3446-75752', '89fad04ec9e16796e5228291-5125', 'b9bc6dffe894ef765f95415a-8012',
  '7386d5a0b6f5ffefefff2c2c-70734', 'a8e6cfdcedc1ffd3b6ffaaa5-71302', 'e8f79a49d2923b445b383746-76698', '29d2e413829bfcc29afde9c9-18085', '0d7685084d6869c181ccf186-3528', 'e2eff1b6d5e165799b555273-192', '693f27e4c144df7943c24b39-307',
  'ff895dd5eeff78bbe61b435d-101494', 'e4fffea4f6f9ff99feba52ed-38861', 'fbfae1cef0b964a36fffe121-114093', '1c1124684656de774eb7e1b5-116691', '71397c91519dc582d5ffdf5a-87607', '442b72993d9a8a6bf0fedf96-3060', 'd8b5def9f1bff3b75bcc7f2a-3373',
  '0c056d590d82b61aaef25d9c-22672', 'fce38a0e5f76083d560c2233-14339', 'eeccb4d83c654f1567604cc3-7938', 'e1f5f26bc5d25a5d9d390050-78589', '19215ef7e6b5fa67ab80185f-78936', 'e9e6c9ca6144566683393e51-3173', '69779b9692afacdbdfd7eaea-135960',
  'b1e9a37ac38f88e0d0c7eeff-140', 'fafafaff6699c54c82512e67-70476', '2be5a6b5ffc7f37ef9904ca7-11346', '360982b72a67ff9797fde8cb-111185', 'fff6fbffbee3fc5bb6ff0592-71012', 'a6e4e7f9f9f9ebcbae8f8787-84126', '639cd95454c5342056220e24-174',
  '00204a00579200bbf0fdb44b-109414', 'feffdfdde0ab97cba9668ba4-118677', 'e8e3c7d4ceb0b85b3fa65238-2512', '51af5bb3e55efeed30ffcb3c-5429', '0e2431fc3a52f9b248e8d5b7-86342', '331621cc085ede7d48eeca98-77071', '1f3a5241a1868cca6ed3f689-3061',
  '3038413a4750ea9215eeeeee-42452', 'f9f9f9bcbab89d8f8f625757-131234', '3c90995fbdb0e3e2c3f0efe2-34781', '9a69e147429df7b7f3e27393-250', '0900890060ca91cefffcdc74-118279', '36d1c4a0eeccfff2bef6318c-65068', 'f7f7f84eeaf6c82586291f71-93465',
  '7b99fa53cdd896eab7f1f3b8-8182', '1a2c5b3e4e887971eab8dff0-122050', '3e3245524a7997d8ec74bbca-196', 'fdfdfde1eb71ecab69e36161-106789', '7d156db94e8ad87ca1ffd7f1-87687', '2e3b3e50666bf9b8befd6378-74943', 'e04b5ae497565b305a9a4c68-146',
  '4ac6b74f5e7f965f8aff7070-2738', '2609802839963aa3c1f6ffd2-15662', '1fab8962d2a29df3c4d7fbe8-66129', '3d1860643579bb99cdf5edf7-67108', '54447b49b47e94dd4dffd944-6156', 'd1ffa200cf950098ef6d0ad3-38641', 'e97a7a8b4f808b76a5b9c0d5-141',
  '2a2b5f393c833dc4d044d9e6-70717', 'efd8f4d4abdcea5656f1e38a-241', 'b2085df9c11c0d85493a3d44-8303', 'e3dfc8f5f1da808c6cfdac61-17726', 'feff89ff9f68f85959ac005d-101730', 'f2f4fbd22780f8b5005e227f-133164', 'f7ffbaf7e39cebaf81da8067-204',
  '363636dc2f2fff894cf8f8f8-103371', 'f0f2aca7cbd97e94bf5357a6-31006', '14103bf02a717ec0e46789ba-70512', 'dbd8e35c5470352f442a2438-8350', 'e9528023b1a5ffdd7ef3f3f3-111027', '48f3db51c4e96150c14a3764-34002', '15b7b910ddc2f5f5f5f57170-39609',
  'a9eee6fefaecf38181625772-79451', 'ffb400fffbe02994b2474744-9140', '3e4377fd367ef1f2f3ff9900-97007', '343434055e6862a388b9d2d2-2562', 'ffbc65ac4c5e5c476feeeeee-43120', 'f5efe3e6e7e5f7d3baa6aa9c-130136', '232931393e464ecca3eeeeee-117601',
  'f1efe9beceb034857fb0a48a-3881', '001f3f0833580d63a5ffd717-6131', 'e01171ab0e8659057b0f0766-124591', 'ff304f002651775ada28c7fa-3604', '28615be4f6f6cccceac089f8-23083', 'ff9898cf455c971549470031-64641', '900c27c70039f6c667f1f8fd-42666',
  'ffdedef7f3cec5ecbe4797b1-74424', '28544bacbd86ffd6a0ffa06f-112038', '0204382841841f8ea300eaff-27158', '8ecccc50717b3a4042212121-155', 'f9f8eb76b39d155263f0b917-108559', 'fbf9fafd0054a800382b2024-131842', '657dc4838ed9ece8e5f59292-93126',
  '43496e544d7e65589cffc12d-36105', 'f2f7ff0b409c10316bffe867-131265', '2f2342e42f45b42b3f7ca0e5-2661', 'c54c82ec729cf4aebafdfdcb-43744', 'eeeeeeff9966e52b509c2542-8029', 'f7f2c1f0ca6d48ba95403321-105558', '300532aa3763f6dec4fef8dd-20605',
  'fc8a15f6f6f61ee494009378-72814', 'ff64737578825cc1b36ef7c8-125017', '0000003e3636d72323f5eded-24652', 'ffeed0f79f24f12d2d7c064d-135057', '2aaf744ed99cd1ebfef7be7f-63915', '5d50c6f85e9ff18facfacd49-135383', '3038412e4750f6c90ef7f7f7-73149',
  '66e1b400615900796f009589-5986', 'ff6f6ffff46ef6f6f6a58bff-67020', 'a1d9ffca82f8ed93cbf2bbbb-102454', '2794ebbff8d447d6b617b3c1-34098', '80ef914ba54df3ef82f0c15a-4285', 'abf2fbb589efa964cdf1a3c5-181', '2f2b2bf3368dffc468fff7ca-41625',
  '303481d6e6f2f5f5f5fff200-78974', 'f70776c3195d680747141010-70274', 'f7ec77da5151ed9f66876464-189', 'ca3e6bfa83839dd3ccffe4b3-66989', '6c95ec3d61ad81e1af41a06f-253', '18587afc624dfca7a7ffd6d6-78489', 'ecfafb81cbc84aa6b5d6c481-107279',
  'fc345c49beb7afffdfeafff7-75278', 'f83e4bf7e185cb9bba9d53c3-2171', '2f1b44892c41c89034fbff5f-2520', 'db3b61ef3f613a3a59555574-121992', 'f5e1daf1f1f140a798476268-65168', 'ffe0371dcd9f088c6f23033c-91572', '6b0848a40a3cec610affc300-109078',
  '303242394359f2be8dba6c65-2499', '35477d6c5b7bc06c84f67280-121870', 'e5f9bda0e4187fb414525050-79457', 'eaefc49bdf4625a55f346473-38961', '4a2c2cd3504affdc76fefea4-95097', 'f0fff3c6f1e770acb159606d-44675', '3634345c575762929aefecec-125408',
  'f0f0f043dde6364f6bfc5185-95568', 'ff6138ffff9dbeeb9f79bd8f-114273', 'fbe0d84d727e2836447a6552-8043', 'feeb974fb783409d9b034561-118368', 'fc00a3b30c7b780662e3f6f5-88422', 'e0fcffbde4f4404969ff7f50-103350', 'efecea334854e04462f9c535-30285',
  'a1c45afff9e0f1c550ea4c4c-128556', 'd0ef84f4d143fda831de561c-106499', '20716a23a393f4a9c7fff78c-129673', '00345902809002c39afce38a-95689', '2f1b41872341be3144f05941-68678', '6c5070df6a6af6f6e3c2dbc1-84551', 'c4aff0fffeec64d7d65782bb-82296',
  'ecffc964fed682a6ee7871bf-38857', 'e0fffb29cdb5008698f39c9c-4535', 'fef0ffd6c8ffc79ecf7e6bc4-12715', '59b79183f084f3ffa1f1d665-7637', '15274436759161d2b49dfdc7-6053', 'fafafae0bb20841818000000-133828', 'f60c86f9f6d8a5bfdd2e89ba-93272',
  '3f3f3f95956ed2d86eefefef-1298', '73f7dd2cc4cb1972a42e3a87-8025', '5c4d4d915b4aa96851f2f1e7-136145', 'f48fb1f06292ad1457880e4f-76335', 'bb2253ec185dff9171ffb383-14587', '2b007b2f89fce7e6fcdd7c1b-121829', 'ebf0f698ccd3364e68132238-134510',
  '4ae3b5eeeeee2a5d67171332-26949', 'fffafaffe0e0ffc0d0efdfbf-137086', 'f1fafba0e4f19dc6ff4993fa-38824', 'cff800feff920fefbd7899dc-24114', '658361d0dd97f8fae4f9de79-63012', 'f85f73fbe8d3928a97283c63-41089', 'e4f68f50c19a686354444036-17001',
  'cabfabdfd8c841444b52575d-32734', '7dd87d4c91735b446a906387-177', 'bdd8f182a6cb3667a6214177-2978', '2c2d34e94822f2910aefd510-16467', 'faf4d0c14545ea4c4c703b3b-106475', '4e1e1ee63870fbe6a258e481-79143', 'e1ffcfcfcbf1bab5f64d3664-106339',
  '20decb41eecbf9f296fcd78e-43974', 'f4fab3a4eae853aca8498eb9-33148', '161d6e1160aa9bb4dae9d2b3-99599', '9f609cea8f79e4d183f8f1e5-107673', '08085ea2ef44fff07ae8fcf6-106302', 'fafafae1eeffc2cfd8543a3a-30163', 'eae7edb793e6646ecb3532a7-72277',
  'ff8484d84c735c3b6f35234b-137170', '15eda30ea47a068b80127780-26451', '1c0c2a343b9961bdf69affdc-4622', '294a660b3846ffbbbbfcd2c2-118126', 'bff4ed280f34b30753f6c667-88466', '499491a3dec9f7fed8fbd400-44707', '8be3e1d3f7ad95bb7697935c-134',
  'a212321a183120615bdece9c-5563', 'ffe165de424284243b412135-9264', '27323a43505529a19ca3f7bf-16256', '58785070907878b0a0f8d0b0-133330', 'ffe76ae0ab5b94784c6e4c41-193', 'aa530edf8931f5c16cf3eded-121927', '11cbd7c6f1e7f0fff3fa4659-110868',
  '0000003e432e616f39a7d129-130443', '23425fa64942ff7844ffab5e-14684', 'f54ea2a94caf7b3b8c41228e-44226', 'f5eee6f3d7cae6a4b4c86b85-121977', '8ea6b4e7eff3ff8f56984a59-116678', '57385ca75265ec7263febe7e-15473', '35013f561050951556e9b5d2-8171',
  '1b805755a44ed7c37aede9a3-65520', '26596122706676a665ffdd5c-107050', '3546496c7a89a3c6c4e0e7e9-42568', '22213d4e318824babceaef9b-74079', 'fcfcfc0fc9e73186b24756ca-96781', '00b8a9f8f3d4f6416cffde7d-9506', 'ffb6b9fae3d9bbded661c0bf-107482',
  'dddddd574e6d43405d4b586e-68013', '616eef09a8fa41c5d3d0f1cf-62535', '1d3e53254b62476d7c77abb7-73271', 'f0f87f4bc87f29668b6eaff7-4176', 'f5e1daf1f1f140a798476269-98666', '08d9d6252a34ff2e63eaeaea-17117', 'f6f6f6d6e4f01e56a0163172-89958',
  '442a9df14e95b13cd5faf3fc-36185', '7344884926459febebfafcdb-101919', '2d39999a1ba0f08181ebbb91-130428', 'eaec9643c0aca93199fa0559-132296', 'f59aa3f5e4c334a7b25b2e35-136806', 'eca106d34f1e91300a5f1b00-1181', 'e25d4ea93545d9528bff92e8-5336',
  'eaf88779dc963bbbb3377aaf-5241', '89aa97f4e3b7fff798fd7e89-29636', 'ebd9ddd8aed39182c4486989-133', '232931f73859f1d18aededed-122811', 'ff6464ffbd67f8fe855be7a9-5132', 'f3f6f690eee155b3f36356e5-62180', 'f64662c6195174193856132a-9474',
  'ebfffac6fce56ef3d60dceda-64711', 'efbfc6c228288a0f0f3c0303-1914', 'c02727f4806dffffd3f3f2b4-80113', 'eda1c1fab2acbee4d2d7f8f7-123653', '76d3ffd78bfffffa9dffbd74-62923', 'f7e74a09c6ab06888802556d-39495', '062c800e6ac74fb9fcf6f5da-2881',
  '3038413a4750f6c90ef64e8b-28621', 'a20a0abb9518ccd51af7ffa8-23588', 'c84361e78775abcdcbebe59b-88143', '37474f607d8b90a4aef7b633-97923', '80a3a2abcecfc4dce0daf4f5-5656', 'f03861fef2f2f5d97e7d5e3f-63973', '432f44ea5455a7425cffd460-16615',
  'fafaf600fff000d1ff3d6cb9-117534', '205d67639a67d8ebb5d9bf77-72484', 'f9f8edc4e3cb6a9c78fff1bc-120121', '591fce0c9cee3dbdc2a1f480-29746', '4d12ee2f24c13fd1cbf8f6f6-44586', 'fafbd4b2ebf9aea1ea8c54a1-67593', 'fafafac7eeff0077c01d242b-38962',
  '88bef5ba53def469a9f4fa9c-16579', '333c4a495664f6f7d3f8fceb-44662', 'f1fcfdc7eeff4d6de3393737-25796', 'd8fff178e4d4b485d85b73a7-9385', 'f35f5fcc435ff1ea6536a3eb-5485', '45eba521aba51d566e163a5f-116554', 'bc5148fef8e67bcecc3090a1-106719',
  '66bfbfeaf6f6fcfefef76b8a-94114', 'bff4ed280f34e41655b30753-66130', 'eaafafa2738c645c84427996-118762', 'f7626221658365c0bacffdf8-120199', 'd4ed9d64a97b3a54653d3931-8016', 'e4f5e5a6dfde88a6e58d6ec8-7641', '011f3f0960bd429ffdfef2bf-116599',
  '00354500454a3c6562ed6363-119977', 'fffbccfd2e2ecf1b1b900d0d-106460', '1a2634203e5feec550f9e3a3-1608', 'f0f0efedd690b1bd5d955a47-6178', 'ffdd9358dada1ca2bb005e7c-105887', 'e8e2dbfab95bf5564e1a3263-135910', '06cdff8200ff470c8518134c-3780',
  'fda403e8751ac513508a1253-115428', '280b4561105ec84771ffe98a-68797', '12e6c8a287f4414141000000-130118', 'dcdadad869c0fffd8cffbd59-6303', '2c29554c5fb1f9f194cdd582-1910', 'c2ffff8bdeffa888ff26466f-3063', 'f9f8ebffe1b67a9eb1415865-68768',
  'fdf0f69515557711441e0411-131852', '0f1021d01257fb90b7ffcee4-40156', '304d4e4b75518a9e52f0d699-222', '0e153a3d5af122d1eee2f3f5-2053', 'f8fcfbc9fdd779d1c36892d5-93416', 'f7fdb6a4d79221825c424141-13136', 'daebeeb6d7defceddaff5126-35642',
  'f06161eb786bf3a871e9ec82-8321', '7a9eaf655989de88a5ffcebb-227', 'ef6c577ed3b2b9e6d3f2f2f2-137244', '6effbfdcaee8ffc5e6fcf2db-135813', '3434342d4059ea5455fde9c9-33743', 'fafafae8f1f5005691004a7c-69667', '241023883c82b7569affbf00-7422',
  'ff520000335504536cadaca7-71715', '0962ea0e7cf40aa0f6faf15d-70588', 'fcefed6173f43b2e40f35e3e-8860', 'a13939e75151fcc88ac2c57f-94589', 'f67280c06c846c5b7b355c7d-100885', '7bc74d222831393e46eeeeee-19775', '0000ff6a5acdadd8e6e6e6fa-130345',
  'd0efb5eb78782f3e75f3e595-124065', '6251da828bff7ab7fff0fc93-39065', 'fafafae3e3e3ee6f57cb3737-136570', 'f6efb435c2bd2796cb3379e4-109426', 'ebebebfec1005280783e615b-106827', '6fe7dd3490de6639a6521262-18612', 'ffe180eba0598b3c7641245c-4174',
  '00e0ff74f9ffa6fff2e8ffe8-36477', 'fffdb7aef4a479b8d1e36488-123528', 'eeeeeecde8f6d195f90033c7-137211', 'fadb3fecf7c551574827332d-1895', '682666cf0a2ce73e51ffce00-92811', 'ecfeff00b7c21284944ef037-106516', 'f7f7f7f5b553854836000000-86606',
  'e5f1e3a3cd9e52947135635b-195', 'dbdbeb7577cd080957ff6d02-76029', 'e0ffcdfdffcdffebbbffcab0-125272', '0e2e3b1666787db9b3d8d7c3-2487', 'ffc7c7ffe2e2f6f6f68785a2-105443', 'fcf9f4ffc97cea7659c1c1c1-106734', '3038413a4750d72323eeeeee-35497',
  'ffebbc5da7ae543d46292830-212', '04879c0c3c78090030f30a49-4038', 'bae5d5d7acd4eec2c2f2f2b0-129031', 'f6faf7e7eaa8b4bb72303e27-63955', 'f6aad0e9767c8f5b4addd49f-232', 'a8e6cffdffabffd3b6ffaaa5-118795', '4237375d5d5d00adb5a3f7bf-16255',
  '8e1d41dbbf0dffcd19ffefb4-106736', 'ecfffbb4f1f12d767f1e6262-63974', 'da5c53a8e4b14aa3ba306d75-5712', 'faffb8c5f0a435b0ab226b80-117565', 'd6ecfa6f3826b84a39f15c5c-1907', 'ff004d9d0b285a082d33030d-7968', 'f03861fef2f2f5d97ee8b844-87640',
  'ffa258fff7c2a02a634b125c-120172', 'd789d79d65c95d54a42a3d66-158', 'f2eb80a2bf392685bf144673-4464', 'ffa3ac00043c005d6c00c9b1-107139', '1b3c680074e400b8c0e9ffb2-98202', 'd4a5a5ffecdaf9ffeaa6d0e4-93125', 'f3f6f630e3ca11999e40514e-71050',
  '626eef09a8fa41c5d3fffa9d-88510', '15567460beb379f8bbf5ffae-7956', '283149404b6900818adbedf3-118962', '4b4c7aeb92fbc855bca03271-1908', '4ac3bea3dec9e6efbffaac64-3452', '83afa658727fe5e5e5d3a284-5308', '233142455d7af95959facf5a-123973',
  'fffceaa5f2e78983f33a0077-74886', 'c7f3fffdc7ffffdcf5f2f4c3-110223', '31588a638ccc90b2e4eacf79-71572', '222831393e46b55400eeeeee-136567', '448ef675c2f665daf7ffe981-117192', 'ebe8beb3c87a347a2a202e24-33592', '0e31506dc9c8ffc0c2f7e9e3-124180',
  'fbffe0ffd6a6ff8ab4d86eff-38859', '00ad7c52d681b5ff7dfff8b5-41482', 'd5441c013c4d9dd5cbf3e5b1-3538', '152a382f5241d6cfb9e4e5db-8634', 'ffed8fa7d46f3597683c3352-86343', '581845900c3fc70039ff5733-87245', 'eff7d3cedcc3a7b99e535a3b-62928',
  'ff4545ff9867ffbf87ffedb2-71366', '425e920c81f65fe1d9f7fad1-41796', 'c82121dee1ecbecbff0d0cb5-137194', '1b5a7a1aa59aa6ed8ef3ffb9-64640', '9effa936485e33314629252c-203', 'ffabe5c7f5ffd89ffff6fcae-63788', '17bebb2e282acd5334edb88b-121900',
  '392f2f3a756359a985e6d3a7-39481', '5e8b6f436e4ffa8f4df87829-122310', '22eaaab31e6fee5a5affb174-82114', 'fffd7560e5503b6ac06e3274-14207', '364968fddf97e096646c4343-211', 'ff6d244e413b857671e2ded3-110922', 'fffaa2d600b1a500a3680097-36487',
  'fd5959ff9c6dfcff82afc5ff-36041', 'faa9dffae98ff04f4f810749-19337', '3e65459973e282cedaecffb1-219', '070d591f3c885893d4ceddef-134927', '3232328559a56db193f4e5c2-111086', 'ffcfdffefdcae0f9b5a5dee5-39602', '0b526903051e978d58eae1e1-78705',
  '624464d02e77fed6befffee6-100741', 'f7ebc9f2cc96814906d35823-3213', '4027855f4e9efafb97fcc97b-65473', '4ec9df63a1d03576a7344986-1043', '461b936a3cbc8253d7f78f1e-88310', 'dd0a35e4d1d31687a7014955-124155', '2837392c5d63a9c52ff7eebb-18160',
  '7effdbb693fe8c82fcff9de2-67166', '071a5208697217b978a7ff83-103966', '4b2b305e3b4daa96b7d9e2a8-33261', 'f9f9f9efe94b9f1861631357-76530', '9ae17b6bba6230747042476d-160', 'f2f4b2cce4900c907d0d627a-131306', '1684a709a599f6ec72f6f6f6-76768',
  'fffe9fffd480fca180f56262-68755', 'ffbdd4ffe5b9ffc77fff5c5c-100564', 'a1eafbfdfdfdffcef3cabbe9-92306', 'a3a7e4bae2bef0f1b3c5e5e3-125679', '081f375fc9f32e79ba1e549f-8015', 'ffd6b6ea7362b742425c2626-43879', 'eb586fd8e9f04aa0d5454553-3460',
  '248888e6e6e6e7475ef0d879-106353', 'b9f9ffdafdfff7e590f5cd6d-71826', 'fcf0c8f7d098911f27630a10-40803', '282d4f23103aa0204cff6c00-105358', '05004eff0000fb7777ffcccc-132032', 'f9f9f9ded5c4ef7e56305973-97209', 'e9e2d0ea9085d45d796e5773-83572',
  'f4e0225a37c318224bde1b4a-3781', '363333272121e16428f6e9e9-87026', 'a099ff5a67a6fcb241d68d08-4733', 'ebe9f6453c386a5c55f66e00-66663', 'fdffa3f59af0a980e4a2e4a2-32264', '0002490f4392ff5151ff8b8b-89959', '64868e98b4a6d1e4d1f3fbf1-36394',
  'ffee7d534c98b767ff44fadd-15211', '3b939b2f818991f3fcc9fbff-4319', '283149404b69da0463dbedf3-107618', 'f7f37365d2692d8b7d2f64a3-7919', 'dddddd113c4a265a5c3f7b70-97771', '055049faf35e069a8ea1e3d8-3287', 'e9faddb8e4c93f546842291c-118629',
  '9bcb3ceff669f29f3dcf3333-9214', 'f759403342523648573dc7be-97912', 'a6f2db7bcace678eb44f4e79-233', '76508e482d5703c1eb86f3b8-24484', '113f6734699a408ab465c6c4-43601', '3629994262c544aec293efed-1909', '87e5da92a4c0f4adade58cdb-124981',
  'ecf0f133cccc2980b92c3e50-116289', 'fffbe0fce38a2994b2444f5a-87062', 'f5fac8aee8e68bcfcc539092-94235', '464545fb5660f98e90f0f3b0-78942', 'f73f52ffea85f6f6f67986c7-62847', 'f5b17b4e709d89a4c7cdd5e0-122131', 'a3f3ebf1ffabfbd341fb9a40-129865',
  'f9f5f0f2ead3f4991a321313-44430', 'ffe3b7840404cb0101ffaf00-81561', '39065a6a05729a0f98ea0599-86615', 'ffe0a3e182379439396a2634-7636', '8e3343ec9454f1f08ac6cd78-97068', 'b8eef1bf68f6fd89ddf0e48e-32822', 'e9f6799bdf4625a55f346473-18916',
  'ffedc6ffc478fff87d724330-2705', 'ffc7c7dc7646a45c5c6c476e-3382', 'f0bebe5ea3a63a718cffffdf-79270', '2837392c5d63a9c52ff5f5f5-42214', 'fcfaefe2e0a5d3504aa63636-35881', '7696db562d7dae427bff8a98-5240', 'f9f3e6e2dcd5e8aa8c5e616a-73808',
  'e3fdfdcbf1f5a6e3e971c9ce-42191', 'f3ff92f6ce592e8fc656cfd2-5895', '393e465c636ef96d00f2f2f2-98138', 'd2f6fca9d2ff7984ee6730ec-44243', 'fbfad3c6e377729d3936622b-135904', 'f2d1a8ebebeb669b7c557669-106748', '1fad9fcd3131ab1212f6c667-88465',
  'd5ab9ce6e6967bc0a354878f-191', 'f47c7cf7f48ba1de9370a1d7-42617', 'd3f6d1a7d7c574b49b5c8d89-67082', 'f4f7ed86ee602e6e652b3752-42254', 'fad3cfa696c82470a0060608-125279', '4a304db17179ffb37bfff199-13933', '6e3b3bac3f21be6a15f3cf7a-136716',
  'ff006cd62b70973961623448-67169', '003e21067242098b54f8d098-25912', '415f77d1e9eafc5050ffd00c-33357', '4cb3cd52d6d35968b1302579-6362', '1b435d78bbe6d5eeffff895d-43750', 'fffbafff5656cd0a0a42cfc4-38613', '0e957704deadf1efb9fbfae1-108068',
  'fcf798e0fff974d2ff5ca4ca-35990', 'fdf1dba6cb12e0054384253e-132460', '1ffffffffde1ff9d76ff4273-101875', 'ffed78feffeaaddce4586b8f-80660', 'e3e8f8c0c5cd3e588f203562-79325'
];

var randi = Math.floor(Math.random() * data.length);
var colours = itemer(data[randi]);

// Original Code End




// Link Text Colour

var firstColour = colours[0];
var secondColour = colours[1];
var thirdColour = colours[2];
var fourthColour = colours[3];


// Changing the Text Colour

$('.first-btn').css('color', getTextColour(firstColour));
$('.second-btn').css('color', getTextColour(secondColour));
$('.third-btn').css('color', getTextColour(thirdColour));
$('.fourth-btn').css('color', getTextColour(fourthColour));


// Function that performs the colour change

function getTextColour(colour) {
  console.log(colour);

  // Get the opposite colour Hex
  colourInvert = invertHexColour(colour);
  console.log(colourInvert);

  // Convert new hex into RGB
  colourInvertRGB = hexToRGB(colourInvert);
  console.log(colourInvertRGB);

  // colourInRYB = rybToRGB(colourInvertRGB);
  // console.log(colourInRYB);

  // Convert the RGB into HSL
  colourInvertHSL = rgbToHSL(colourInvertRGB);
  console.log(colourInvertHSL);

  // Change the hue by 30 to get a tertiary colour
  colourComplimentHSL = findTertiary(colourInvertHSL)
  console.log(colourComplimentHSL);

  // Desaturate the colour
  saturation = colourComplimentHSL[1];
  saturation = 100-saturation/2;


  // Tune the brightness
  brightness = colourComplimentHSL[2];
  if (brightness > 65) {
    brightness = brightness + Math.floor((100 - brightness) / 2);
  } else if (15 < brightness < 35) {
    brightness = 75;
  } else if (brightness > 50) {
    brightness = 100;
  } else {

  }

  // Get the modified colour, and convert it back into hex
  colourComplimentHex = hslToHex([colourComplimentHSL[0], saturation, brightness]);
  console.log(colourComplimentHex);



  return "#" + colourComplimentHex[0] + colourComplimentHex[1] + colourComplimentHex[2];
}













// Colour Manipulation Functions

function findTertiary(colour) {
  h = colour[0];
  s = colour[1];
  l = colour[2];

  tertiaryHue = h + 30;

  if (tertiaryHue > 360) {
    tertiaryHue = tertiaryHue - 360;
  }

  return [tertiaryHue, s, l];
}

function invertHexColour(hex) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}

function invertColour(colour) {
  r = 255 - colour[0];
  g = 255 - colour[1];
  b = 255 - colour[2];

  return [r, g, b];
}

function hexToRGB(hex) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  var r = parseInt(hex.slice(0, 2), 16);
  var g = parseInt(hex.slice(2, 4), 16);
  var b = parseInt(hex.slice(4, 6), 16);

  return [r, g, b];
}

function hslToHex(colour) {
  var h = colour[0];
  var s = colour[1];
  var l = colour[2];


  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = x => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return [toHex(r), toHex(g), toHex(b)];
}

function rgbToHSL(rgbArray) {
  var r = rgbArray[0];
  var g = rgbArray[1];
  var b = rgbArray[2];

  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  h = Math.floor(h * 360)
  s = Math.floor(s * 100);
  l = Math.floor(l * 100);

  return [h, s, l];
}

function hexToHSL(colour) {
  return rgbToHSL(hexToRGB(colour));
}

function hslToRGB(colour) {
  var h = colour[0];
  var s = colour[1];
  var l = colour[2];
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}



// A converter I found online. Just pasted it wholesale.
// EDIT: Cannot seem to get it to work, which is a shame. Ah well.

/**
 * ryb2rgb, the motherload, convert a RYB array to RGB
 *
 * @param ryb   {array} RYB values in the form of [0, 255, 0]
 * @param limit {int}   [optional] max value of the color, defaults to 255
 * @param magic {array} An array of magic colors to use in the color space interpolation
 *
 * returns an array of the RGB values
 */


// see http://threekings.tk/mirror/ryb_TR.pdf
function cubicInt(t, A, B) {
  var weight = t * t * (3 - 2 * t);
  return A + weight * (B - A);
}

function getR(iR, iY, iB, magic) {
  var MAGIC_COLORS = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 0],
    [1, 0.5, 0],
    [0.163, 0.373, 0.6],
    [0.0, 0.66, 0.2],
    [0.5, 0.0, 0.5],
    [0.2, 0.094, 0.0]
  ];

  magic = magic || MAGIC_COLORS;
  // red
  var x0 = cubicInt(iB, magic[0][0], magic[4][0]);
  var x1 = cubicInt(iB, magic[1][0], magic[5][0]);
  var x2 = cubicInt(iB, magic[2][0], magic[6][0]);
  var x3 = cubicInt(iB, magic[3][0], magic[7][0]);
  var y0 = cubicInt(iY, x0, x1);
  var y1 = cubicInt(iY, x2, x3);
  return cubicInt(iR, y0, y1);
}

function getG(iR, iY, iB, magic) {
  var MAGIC_COLORS = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 0],
    [1, 0.5, 0],
    [0.163, 0.373, 0.6],
    [0.0, 0.66, 0.2],
    [0.5, 0.0, 0.5],
    [0.2, 0.094, 0.0]
  ];

  magic = magic || MAGIC_COLORS;
  // green
  var x0 = cubicInt(iB, magic[0][1], magic[4][1]);
  var x1 = cubicInt(iB, magic[1][1], magic[5][1]);
  var x2 = cubicInt(iB, magic[2][1], magic[6][1]);
  var x3 = cubicInt(iB, magic[3][1], magic[7][1]);
  var y0 = cubicInt(iY, x0, x1);
  var y1 = cubicInt(iY, x2, x3);
  return cubicInt(iR, y0, y1);
}

function getB(iR, iY, iB, magic) {
  var MAGIC_COLORS = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 0],
    [1, 0.5, 0],
    [0.163, 0.373, 0.6],
    [0.0, 0.66, 0.2],
    [0.5, 0.0, 0.5],
    [0.2, 0.094, 0.0]
  ];

  magic = magic || MAGIC_COLORS;
  // blue
  var x0 = cubicInt(iB, magic[0][2], magic[4][2]);
  var x1 = cubicInt(iB, magic[1][2], magic[5][2]);
  var x2 = cubicInt(iB, magic[2][2], magic[6][2]);
  var x3 = cubicInt(iB, magic[3][2], magic[7][2]);
  var y0 = cubicInt(iY, x0, x1);
  var y1 = cubicInt(iY, x2, x3);
  return cubicInt(iR, y0, y1);
}

function rybToRGB(color, limit, magic) {
  var MAGIC_COLORS = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 0],
    [1, 0.5, 0],
    [0.163, 0.373, 0.6],
    [0.0, 0.66, 0.2],
    [0.5, 0.0, 0.5],
    [0.2, 0.094, 0.0]
  ];

  limit = limit || 255;
  magic = magic || MAGIC_COLORS;
  var R = color[0] / limit;
  var Y = color[1] / limit;
  var B = color[2] / limit;
  var R1 = getR(R, Y, B, magic);
  var G1 = getG(R, Y, B, magic);
  var B1 = getB(R, Y, B, magic);
  return [
    Math.ceil(R1 * limit),
    Math.ceil(G1 * limit),
    Math.ceil(B1 * limit)
  ];
}
