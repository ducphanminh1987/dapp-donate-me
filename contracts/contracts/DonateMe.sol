//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

// address 0xcB2FABD5514C75a6Fa06cf6c4C544D063505f10d
contract DonateMe {

    // with event, it allows to write a transaction log to blockchain
    event NewMemo(
          address indexed from,
        uint256 timestamp,
        string name,
        string message
    );


    struct Memo {
        address from;
        uint256 timestamp;
        string name;
        string message;
    }


    address payable owner;

    Memo[] memos;

    constructor() {
        owner = payable(msg.sender);
    }

    function donate(string memory name, string memory message) public payable {
        require(msg.value > 0, "should not donate nothing"); 
        // add new memo
        memos.push(Memo(msg.sender, block.timestamp, name, message));
        // add transaction log
        emit NewMemo(msg.sender, block.timestamp, name, message);
    }

    // send balance of current contract to contract owner
    function withdrawTips() public {
        require(owner.send(address(this).balance));
    }

    // return memos
    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}

